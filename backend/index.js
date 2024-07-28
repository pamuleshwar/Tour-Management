import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tour.js';
import userRoute from './routes/user.js';
import authRoute from './routes/auth.js';

dotenv.config();
const app = express();
const port = 8000 ;

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser : true,
            // userUnifiedTopology : true
        })

        console.log('MongoDB database connected');
    }catch(err){
        console.log('MongoDB database connection failed', err);
    }
}


//middleware
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//tourReq -> tour route
app.use('/tour',tourRoute);
app.use('/users',userRoute);
app.use('/auth',authRoute);

app.listen(port, () => {
    connect();
    console.log(`Server listening on port : ${port}`);
})