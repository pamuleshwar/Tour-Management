import express from 'express';
import { createBooking, getAllBooking, getSingleBooking } from '../controllers/booking_controller.js';
import {verifyAdmin, verifyUser} from '../utils/verifyToken.js';

const router = express.Router();

router.post('/',verifyUser ,createBooking);
router.get('/:id',verifyUser ,getSingleBooking);
router.get('/',verifyAdmin ,getAllBooking);

export default router;