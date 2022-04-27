//1
import express from 'express';
import bodyParser from 'body-parser'; // middleware -  process data sent through an HTTP request body
//6 after export router from routes->users.js
import usersRoutes from './routes/users.js';

//2
const app = express();
const port = 8000;

//3
app.use(bodyParser.json()); // using json data in our app - javascript object notation
//7 after importing routes path and file
app.use('/user',usersRoutes);
//5
//creating first route to have text on homepage and solve cannot get error on homepage
app.get('/',(req,res) => res.send("hello from BiggBrains"));
//4
app.listen(port , () => console.log(`Server running  on port : http://localhost:${port}`)); // use template strings not regular strings

//whats our api will going to do -- handle users
// 5 diff routes -- 1 GET / users find all users , 2 POST /users creates a user , 3rd GET/uders/:id find user details , 4 DELETE / users/:id deletes a user , 5th PATCH / users/:id updates user

