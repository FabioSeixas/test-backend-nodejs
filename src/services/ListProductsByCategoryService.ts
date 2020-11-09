import { getRepository } from 'typeorm'

import Product from '../models/Product'
import Category from '../models/Category'

interface RequestDTO {
  categoryName: string;
}

class ListProductsByCategoryService {

  public async execute({categoryName}:RequestDTO): Promise<Product[]> {
    const productsRepository = getRepository(Product)
    const categoriesRepository = getRepository(Category)

    const category = await categoriesRepository.findOne({where: {title: categoryName}})

    if (!category) {
      throw new Error('Category name does not exist')
    }

    const products = await productsRepository.find({where: {category_id: category.id}})

    if (!products.length) {
      throw new Error('There is no product for that category')
    }

    return products
  } 
}

export default ListProductsByCategoryService;