import mongoose from "mongoose";

const connectDB =async()=>{
    try{
        await mongoose.connect("mongodb+srv://vishalgupta120703_db_user:bVlb2916F1NUeNNQ@cluster0.b9wbh65.mongodb.net/Interview?appName=Cluster0");
        console.log("Database is connected");
    }
    catch(err){
        console.log(err);
    }
}

export default connectDB;
