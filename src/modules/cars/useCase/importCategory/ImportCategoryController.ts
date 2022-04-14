import { Request, Response } from "express";
import { container } from "tsyringe";

import { ImportCatergoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController{
    
    async handle(request: Request, response: Response): Promise<Response> {
        const { file } = request;

        const importCategoryUseCase = container.resolve(ImportCatergoryUseCase);
        
        await importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };