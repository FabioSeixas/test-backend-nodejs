import {Router, Request, Response} from 'express'

import ListCategoriesService from '../services/ListCategoriesService';

import CreateCategoryService from '../services/CreateCategoryService';

const categoriesRouter = Router()


categoriesRouter.get('/', async (req: Request, res: Response) => {

  const listCategories = new ListCategoriesService()

  const categories = await listCategories.execute() 

  return res.json(categories)
})

categoriesRouter.post('/new', async (req: Request, res: Response) => {
  const {title} = req.body;

  const createCategory = new CreateCategoryService()

  const newCategory = await createCategory.execute({
    title
  }) 

  return res.json(newCategory)
})



export default categoriesRouter;