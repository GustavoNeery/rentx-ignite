import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCatergoryUseCase } from "./ImportCategoryUseCase";

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCase = new ImportCatergoryUseCase(categoriesRepository);
const importCategoryController = new ImportCategoryController(importCategoryUseCase);


export{importCategoryController};