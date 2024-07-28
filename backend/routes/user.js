import express from 'express';
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/user_controller.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//update user
router.put('/:id', verifyUser,updateUser);

//delete new user
router.delete('/:id',verifyUser,deleteUser);

//getSignleTour new user
router.get('/:id',verifyUser,getSingleUser);

//getAllTour new user
router.get('/', verifyAdmin,getAllUser);

export default router;