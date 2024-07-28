import express from 'express';
import { login, register } from '../controllers/auth_controller.js';

const router = express.Router();

//register the user
router.post('/register',register);

//login the user
router.post('/login',login);

export default router;