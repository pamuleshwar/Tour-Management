import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/user_controller.js';

const router = express.Router();

//update user
router.put('/:id',updateUser);

//delete new user
router.delete('/:id',deleteUser);

//getSignleTour new user
router.get('/:id',getSingleUser);

//getAllTour new user
router.get('/',getAllUser);

export default router;