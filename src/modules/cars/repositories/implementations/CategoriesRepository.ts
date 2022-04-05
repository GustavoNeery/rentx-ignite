import { Category } from "../../model/Category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";


class CategoriesRepository implements ICategoriesRepository{
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository{
    if(!CategoriesRepository.INSTANCE){
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  } 

  create({ name, description }: ICreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    });

    /**
     * Esse Object.assign é a mesma coisa que fazer isso abaixo:
  
      category.name = name;
      category.description = description;
      category.created_at = new Date();
  
     */

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: String): Category {
    const category = this.categories.find(category => category.name === name);

    return category;
  }
}

export { CategoriesRepository };