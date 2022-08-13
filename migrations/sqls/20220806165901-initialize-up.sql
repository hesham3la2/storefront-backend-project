CREATE TABLE products ( 
    id SERIAL PRIMARY KEY, 
    name VARCHAR(100), 
    price integer
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(100), 
    lastname VARCHAR(100), 
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY, 
    user_id integer REFERENCES users(id),
    status VARCHAR(10) NOT NULL
);

CREATE TABLE order_products (
    id SERIAL PRIMARY KEY, 
    product_id integer REFERENCES products(id),
    order_id integer REFERENCES orders(id),
    quantity integer
);