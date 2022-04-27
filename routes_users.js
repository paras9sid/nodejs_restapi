import express from 'express';


import { createUser, getUser, getUsers ,deleteUser,updateUser} from '../controllers/users.js';

const router = express.Router(); // initalizing our router
//1
// router.get('/users' , getUsers);

//1
router.get('/' , getUsers);
//2
router.post('/', createUser);
//3
router.get('/:id',getUser);
//4
router.delete('/:id',deleteUser);
//5
router.patch('/:id',updateUser);

export default router; // to make its use in index.js file