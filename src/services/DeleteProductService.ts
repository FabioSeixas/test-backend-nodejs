import { getRepository } from 'typeorm'

import Product from '../models/Product'

interface RequestDTO {
  id: string;
}

class DeleteProductService {

  public async execute({id}:RequestDTO): Promise<void> {
    const productsRepository = getRepository(Product)

    const product = await productsRepository.findOne(id)

    if (!product) {
      throw new Error('Product id does not exist')
    }

    await productsRepository.delete(product)

  } 
}

export default DeleteProductService;