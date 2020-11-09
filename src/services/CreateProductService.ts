import { getRepository } from 'typeorm'

import Product from '../models/Product'
import Category from '../models/Category'

interface RequestDTO {
  title: string;
  description: string;
  price: number;
  categoryName: string;
}

class CreateProductService {

  public async execute({categoryName, title, description, price}:RequestDTO): Promise<Product> {
    const productsRepository = getRepository(Product)
    const categoriesRepository = getRepository(Category)

    const category = await categoriesRepository.findOne({where: {title: categoryName}})

    if (!category) {
      throw new Error('Category name does not exist')
    }

    const newProduct = productsRepository.create({
      title,
      description,
      price,
      category
    })

    await productsRepository.save(newProduct)

    return newProduct
  } 
}

export default CreateProductService;