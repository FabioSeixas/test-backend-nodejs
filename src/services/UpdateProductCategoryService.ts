import { getRepository } from 'typeorm'

import Product from '../models/Product'
import Category from '../models/Category'

interface RequestDTO {
  product_id: string;
  categoryName: string;
}

class UpdateProductCategoryService {

  public async execute({categoryName, product_id}:RequestDTO): Promise<Product> {
    const productsRepository = getRepository(Product)
    const categoriesRepository = getRepository(Category)

    const category = await categoriesRepository.findOne({where: {title: categoryName}})

    if (!category) {
      throw new Error('Category name does not exist')
    }

    const product = await productsRepository.findOne({where: {id: product_id}})

    if (!product) {
      throw new Error('Product id does not exist')
    }

    Object.assign(product, {category})

    await productsRepository.save(product)

    return product
  } 
}

export default UpdateProductCategoryService;