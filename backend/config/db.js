import mongoose from "mongoose";


const connectDB = async () => {
    const mongoURI = process.env.MONGO_URI;
    console.log("Mongo URI:", mongoURI);

  
    try {
        await mongoose.connect( mongoURI);
        console.log(`database sucessfully connected to mongoDB`);
        
    } catch (error) {
        console.error(`ERROR: ${error.message}`);
        process.exit(1)
    }
};

export default connectDB;