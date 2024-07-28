import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tour_controller.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//create new tour
router.post('/', verifyAdmin,createTour);

//update tour
router.put('/:id',verifyAdmin,updateTour);

//delete new tour
router.delete('/:id',verifyAdmin,deleteTour);

//getSignleTour new tour
router.get('/:id',getSingleTour);

//getAllTour new tour
router.get('/',getAllTour);

//get tour by search
router.get('/search/getTourBySearch',getTourBySearch);
router.get('/search/getFeaturedTours',getFeaturedTour);
router.get('/search/getTourCount', getTourCount);

export default router;