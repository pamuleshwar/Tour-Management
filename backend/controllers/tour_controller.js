import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try{
        const savedTour = await newTour.save();

        res.status(200).json({
            success : true,
            message : "Successfully created",
            data : savedTour,
        });
    }catch(err) {
        res.status(500).json({
            success : false,
            message : "Failed to create. Try again."
        });
    }
};

//upadte the tour
export const updateTour = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and update
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set : req.body
        }, {new : true});

        res.status(200).json({
            success : true,
            message : "Successfully Updated",
            data : updatedTour,
        });

    }catch(err){
        res.status(500).json({
            success : false,
            message : "Failed to update",
        });
    }
}

//deleteTour the tour
export const deleteTour = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and delete
        await Tour.findByIdAndDelete(id);

        res.status(200).json({
            success : true,
            message : "Successfully deleted",
        });

    }catch(err){
        res.status(500).json({
            success : false,
            message : "Failed to delete",
        });
    }
}

//getSingleTour the tour
export const getSingleTour = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and update
        const singleTour = await Tour.findById(id);

        res.status(200).json({
            success : true,
            message : "Successful",
            data : singleTour,
        });

    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
}

//getAllTour the tour
export const getAllTour = async (req, res) => {

    const page =  parseInt(req.query.page);

    try{
        //find the tour and update
        const allTour = await Tour.find({}).skip(page * 8).limit(8);

        res.status(200).json({
            success : true,
            message : "Successful ",
            data : allTour,
        });

    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
}

//get tour by search

export const getTourBySearch = async (req, res) => {

    //i -> means case sensitive
    const city = new RegExp(req.query.city, 'i');

    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try{
        //gte -> greater than or equal to.
        const tours = await Tour.find({city, distance : {$gte : distance}, maxGroupSize : {$gte : maxGroupSize}});

        res.status(200).json({
            success : true,
            message : "Successful",
            data : tours,
        });
    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
};


//get featured the tour
export const getFeaturedTour = async (req, res) => {

    try{
        //find the tour and update
        const featuredTour = await Tour.find({ featured : true }).limit(8);

        res.status(200).json({
            success : true,
            message : "Successful ",
            data : featuredTour,
        });

    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
};


//get tour count
export const getTourCount = async (req, res) => {
    try{
        //find no of documents.
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({
            success : true,
            data : tourCount,
        });
    }catch(err){
        res.status(500).json({success : false, message : "Failed to fetch"});
    }
}