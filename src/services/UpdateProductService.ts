import { getRepository } from 'typeorm'

import Product from '../models/Product'

interface RequestDTO {
  id: string;
  title?: string;
  description?: string;
  price?: number;
}

class UpdateProductService {

  public async execute({id, title, description, price}:RequestDTO): Promise<Product> {
    const productsRepository = getRepository(Product)

    const product = await productsRepository.findOne(id)

    if (!product) {
      throw new Error('Product id does not exist')
    }

    Object.assign(product, {
      title: title || product.title,
      description: description || product.description,
      price: price || product.price
    })

    await productsRepository.save(product)

    return product
  } 
}

export default UpdateProductService;