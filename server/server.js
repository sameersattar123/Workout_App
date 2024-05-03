import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express()
dotenv.config(); 


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to database");
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log("listening for requests on port", process.env.PORT);
    });
  })
  .catch((error) => { 
    console.log(error);
  });
