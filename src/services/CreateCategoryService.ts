import { getRepository } from 'typeorm'

import Category from '../models/Category'

interface RequestDTO {
  title: string;
}

class CreateCategoryService {

  public async execute({title}:RequestDTO): Promise<Category> {
    const categoriesRepository = getRepository(Category)

    const newCategory = categoriesRepository.create({
      title,
    })

    await categoriesRepository.save(newCategory)

    return newCategory
  } 
}

export default CreateCategoryService;