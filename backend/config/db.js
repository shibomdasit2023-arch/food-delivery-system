import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://shibomdasit2023_db_user:Shibom897@cluster0.nxeyfrp.mongodb.net/fod-delivery-app').then(()=>console.log("DB connected"))
}                                              
