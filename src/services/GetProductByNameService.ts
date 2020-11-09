import { getRepository } from 'typeorm'

import Product from '../models/Product'

interface RequestDTO {
  title: string;
}

class ListProductsService {

  public async execute({title}:RequestDTO): Promise<Product> {
    const productsRepository = getRepository(Product)

    const product = await productsRepository.findOne({where: {title}})

    if (!product) {
      throw new Error('Product title does not exist')
    }

    return product
  } 
}

export default ListProductsService;