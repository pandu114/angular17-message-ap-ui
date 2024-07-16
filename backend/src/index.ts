import express from "express";
import mongoose from "mongoose";

const PORT = 4000;
const app = express();
app.use(express.json());
//const MONGO_URI:'mongodb://'
mongoose.connect("mongodb+srv://sureshpandu114:Suresh@1992@mesagescluster.kqhjhqb.mongodb.net/").then(()=>{
    console.log("Mongo DB connected..");   
}).catch((error)=>{
    console.log(error.message);
    
})
app.listen(PORT, ()=>{
    console.log(`Server running on  http://localhost:${PORT}`);
})