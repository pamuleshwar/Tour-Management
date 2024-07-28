import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
    console.log(req.body);
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body});
    console.log(newReview);
    try{
        
        const savedReview = await newReview.save();

        //after creating a new  review, update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId, {
            $push : {reviews : savedReview._id}
        });

        res.status(200).json({success : true, message : "Review submitted.", data : savedReview});
    }catch(err){
        res.status(500).json({success : false, message : "Failed review submission"});
    }
};