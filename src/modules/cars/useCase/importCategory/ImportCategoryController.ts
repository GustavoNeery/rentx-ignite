import { Request, Response } from "express";

import { ImportCatergoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController{
    constructor(private importCategoryUseCase: ImportCatergoryUseCase) {}
    handle(request: Request, response: Response): Response {
        const { file } = request;
        
        this.importCategoryUseCase.execute(file);

        return response.send();
    }
}

export { ImportCategoryController };