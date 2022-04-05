import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository, ICreateCategoryDTO } from "../../repositories/ICategoriesRepository";

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) { }

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error("Category Already Exists");
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase }