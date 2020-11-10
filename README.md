<h2>Backend Test by Fábio Seixas</h2>

<strong>To run:</strong>

- Clone and run `yarn` to download dependencies.
- Start a docker postgres instance. My `ormconfig.json` uses port `5432` and password `docker` by default. You can set your own settings inside that file.
- Start a database with name `test_backend_nodejs`. You can change this default db name in `ormconfig.json` too.
- Run migrations: `yarn typeorm migration:run`.
- Start the server on port `3333` with `yarn dev:server`.

<br>

<strong>Routes:</strong>

- Create a new category | `body: { title: string}`

`http://localhost:3333/categories/new`

- List all categories

`http://localhost:3333/categories/`

- List all products

`http://localhost:3333/products/`

- Get a product by its name | `body: {title: string}`

`http://localhost:3333/products/by-name`


- Get a products list by category | `body: {categoryName: string}`

`http://localhost:3333/products/by-category`


- Create a new product | `body: {title: string, description: string, price: number, categoryName: string}`

`http://localhost:3333/products/new`


- Update a product category | `body: {categoryName: string}, params: {id: string}`

`http://localhost:3333/products/update-category/:id`


- Update product data | `body: {title?: string, description?: string, price?: number}, params: {id: string}`

`http://localhost:3333/products/update/:id`


- Delete a product | `params: {id: string}`

`http://localhost:3333/products/delete/:id`
