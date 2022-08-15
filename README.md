# Storefront Backend Project

## Getting Started

This repo for storefront backend udacity project.

## Installation

### Install required packages

- `npm install`

### Updata configuration data in .env file .env.example is added with example values

- ENV
- POSTGRES_HOST
- POSTGRES_DB
- POSTGRES_USER
- POSTGRES_PASSWORD
- AUTH_SECRET
- SALT_ROUNDS
- PEPPER

### Create postgresql container configured with data in .env file

- `docker compose up -d`

### Create test database

- `npm run testDB`

### Start testing

- `npm run test`

Run `npm start` to start the backend API

### Start App in dev mode

`db-migrate up` then
`npm run watch`

## Ports

The backend API will run on port `3000` and postgres database will run on port `5432`
