# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index (gets list of all products): GET /products

- Show (gets one product by id): GET /products/:id

- Create new product [token required]: POST /products
  body data: `{ name: string, price: number }`

#### Users

- Index (gets list of all users): GET /users
- Show (gets one user by id): GET /users/:id
- Create new user: POST /users
  body data: `{firstname: string, lastname: string, email: string, password: string}`
- Login : POST /users/login
  body data: `{email: string, password: string}`

#### Orders

- Index (list of all orders): GET /orders
- Current (Active) Order by user (args: user id): GET /orders/:userId/users
- Create (create new order for specific user): POST /orders
  body data: `{userId: number}`
- Add Product (adds product to current order): POST /orders/:id/products
  body data: `{quantity: number, productId: number}`

## Data Shapes

#### Product

- id
- name
- price

#### User

- id
- firstName
- lastName
- email
- password

#### Orders

- id
- userId
- status (active or complete)

#### Orders - Products

- id
- product id
- order id
- quantity of product
