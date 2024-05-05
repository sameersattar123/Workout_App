import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose"; 
import workoutRoutes from "./routes/Workout.route.js"
import userRoutes from "./routes/User.route.js"
import cors from "cors"

const app = express()
dotenv.config();  
// middleware
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
  console.log(req.path, req.method)  
  next()
})



app.use('/api/workouts' , workoutRoutes)
app.use('/api/user' , userRoutes)

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
