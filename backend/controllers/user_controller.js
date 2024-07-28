import User from "../models/User.js";

//create new tour
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try{
        const savedUser = await newUser.save();

        res.status(200).json({
            success : true,
            message : "Successfully created",
            data : savedUser,
        });
    }catch(err) {
        res.status(500).json({
            success : false,
            message : "Failed to create. Try again."
        });
    }
};

//upadte the tour
export const updateUser = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and update
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set : req.body
        }, {new : true});

        res.status(200).json({
            success : true,
            message : "Successfully Updated",
            data : updatedUser,
        });

    }catch(err){
        res.status(500).json({
            success : false,
            message : "Failed to update",
        });
    }
}

//deleteTour the tour
export const deleteUser = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and delete
        await User.findByIdAndDelete(id);

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
export const getSingleUser = async (req, res) => {
    //get the id
    const id = req.params.id;

    try{
        //find the tour and update
        const singleUser = await User.findById(id);

        res.status(200).json({
            success : true,
            message : "Successful",
            data : singleUser,
        });

    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
}

//getAllTour the tour
export const getAllUser = async (req, res) => {

    try{
        //find the tour and update
        const allUser = await User.find({});

        res.status(200).json({
            success : true,
            message : "Successful ",
            data : allUser,
        });

    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
}