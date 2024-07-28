import express from "express";
import { createTour, deleteTour, getAllTour, getFeaturedTour, getSingleTour, getTourBySearch, getTourCount, updateTour } from "../controllers/tour_controller.js";

const router = express.Router();

//create new tour
router.post('/',createTour);

//update tour
router.put('/:id',updateTour);

//delete new tour
router.delete('/:id',deleteTour);

//getSignleTour new tour
router.get('/:id',getSingleTour);

//getAllTour new tour
router.get('/',getAllTour);

//get tour by search
router.get('/search/getTourBySearch',getTourBySearch);
router.get('/search/getFeaturedTours',getFeaturedTour);
router.get('/search/getTourCount', getTourCount);

export default router;