import {Router} from 'express';

import productsRouter from './products.routes';
import categoriesRouter from './categories.routes';

const routes = Router();

routes.use('/products', productsRouter)
routes.use('/categories', categoriesRouter)


export default routes;