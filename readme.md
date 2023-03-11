# MoneyKu-Backend

## Author
[*Kemas Rafly Omar Thoriq*](https://github.com/grandier)

Welcome to MoneyKu-Backend! This is the server-side application of a personal finance management system that helps users to keep track of their expenses and income. This application is built using Node.js, Express.js, and MongoDB.

## Features
- User authentication and authorization using JWT tokens
- CRUD operations for users, expenses, and income categories
- Ability to generate financial reports and graphs

## Installation
To install the project dependencies, run the following command:

```
bash
Copy code
npm install
```

Create a .env file and set the environment variables as follows:

```
bash
Copy code
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
```

Start the server by running:

```
npm start
```

## API Endpoints
The following are the API endpoints available in the application:

| Endpoint | HTTP Method | Description |
|:--------:| :----------:|:-----------:|
|/api/users| POST |Create a new user|
|/api/users/login	|POST	|Login user and generate JWT token|
|/api/users/me |	GET	|Get user profile information|
|/api/users/me	|PUT	|Update user profile|
|/api/income-categories	|GET	|Get all income categories|
|/api/income-categories	|POST	|Create a new income category|
|/api/income-categories/:id|	PUT	|Update an income category|
|/api/income-categories/:id	|DELETE	|Delete an income category|
|/api/expenses	|GET	|Get all expenses for a user|
|/api/expenses	|POST	|Create a new expense for a user|
|/api/expenses/:id	|GET	|Get an expense by ID|
|/api/expenses/:id	|PUT	|Update an expense by ID|
|/api/expenses/:id	|DELETE	|Delete an expense by ID|
|/api/reports/monthly	|GET	|Get monthly financial reports|
|/api/reports/category	|GET	|Get financial reports by category|

## License
This project is licensed under the [MIT License](https://opensource.org/license/mit/).

## Acknowledgements
- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [JWT](https://jwt.io/)

### Feel free to customize this readme according to your project's specifications. Good luck with your project!

