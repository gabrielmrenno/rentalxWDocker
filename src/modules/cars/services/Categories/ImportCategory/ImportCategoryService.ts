import { parse } from "csv-parse";
import fs from "fs";

import { CategoriesRepository } from "../../../repositories/implementations/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

export class ImportCategoryService {
    constructor(private categoriesRepository: CategoriesRepository) {}

    async loadCategories(
        file: Express.Multer.File
    ): Promise<IImportCategory[]> {
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path);

            const categories: IImportCategory[] = [];

            const parseFile = parse();

            stream.pipe(parseFile);

            parseFile
                .on("data", async (line) => {
                    const [name, description] = line;
                    categories.push({
                        name,
                        description,
                    });
                })
                .on("end", () => {
                    fs.promises.unlink(file.path);
                    resolve(categories);
                })
                .on("error", (error) => {
                    reject(error);
                });
        });
    }

    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file);
        // eslint-disable-next-line array-callback-return
        categories.map(async (category): Promise<void> => {
            const { name, description } = category;
            const nameAlreadyUsed = await this.categoriesRepository.findByName(
                name
            );
            if (nameAlreadyUsed === null) {
                await this.categoriesRepository.create({ name, description });
            }
        });
    }
}
