import { Category } from "../model/Category";

//DTO => Data transfer object
interface ICreateCategoryDTO {
    name: string;
    description: string;
  }

interface ICategoriesRepository {
    findByName(name: String): Category;
    list(): Category[];
    create({name, description}: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };