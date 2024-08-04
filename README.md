# E-Commerce-Backend

This application is a functional Express.js API designed for managing a database using PostgreSQL and Sequelize. It provides endpoints for handling categories, products, and tags, allowing for CRUD (Create, Read, Update, Delete) operations. The API integrates with PostgreSQL through Sequelize, an ORM (Object-Relational Mapping) library that simplifies database interactions.

## Installation 
- Clone the Repo
- install dependencies: npm install 
- Create a .env file in the root directory of your project. Add the following environment variables with your PostgreSQL credentials:
DB_NAME=your_database_name
DB_USER=your_postgresql_username
DB_PASS=your_postgresql_password


## Usage 
Create and seed the database:
psql -U postgres
\i db/schema.sql
npm run seed

Start the application: npm start

## License 
none 

## Questions 
If you have any additional questions you can contact me at garrettbritton34@gmail.com