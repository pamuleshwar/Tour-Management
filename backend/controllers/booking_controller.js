import Booking from "../models/Booking.js"

//create booking
export const createBooking = async (req, res) => {

    const newBooking = new Booking(req.body);

    try{
        const savedBooking = await newBooking.save();

        res.status(200).json({
            success : true,
            message : "Your tour is booked.",
            data : savedBooking,
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : "Internal server error.",
        });
    };
};


//get single booking details
export const getSingleBooking = async (req, res) => {
    const id = req.params.id;
    try{
        const singleBooking = await Booking.findById(id);

        res.status(200).json({
            success : true,
            message : "successful",
            data : singleBooking
        });
    }catch(err){
        res.status(404).json({
            success : false,
            message : "Not found",
        });
    }
};

//get all booking details
export const getAllBooking = async (req, res) => {
    try{
        const allBooking = await Booking.find();

        res.status(200).json({
            success : true,
            message : "successful",
            data : allBooking
        });
    }catch(err){
        res.status(500).json({
            success : false,
            message : "Internal server error.",
        });
    }
}