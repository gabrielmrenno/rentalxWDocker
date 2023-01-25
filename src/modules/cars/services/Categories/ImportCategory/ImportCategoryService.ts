import { parse } from "csv-parse";
import fs from "fs";
import { inject, injectable } from "tsyringe";

import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

@injectable()
export class ImportCategoryService {
    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: CategoriesRepository
    ) {}

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
