import mongoose from "mongoose";
import Workout from "../models/Workout.model.js";

export const getWorkouts = async (req, res) => {
  try {
    const user_id = req.user._id
    const workouts = await Workout.find({user_id}).sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    console.log(error);
  }
};
export const getSingleWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "No such workout" });
    }

    const workout = await Workout.findById(id);

    if (!workout) {
      return res.status(404).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
  }
};
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;

  // add to the database
  try {
    const user_id = req.user._id
    const workout = await Workout.create({ title, load, reps, user_id });
    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
  }
};
export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout" });
    }

    const workout = await Workout.findOneAndDelete({ _id: id });

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
  }
};
export const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "No such workout" });
    }

    const workout = await Workout.findOneAndUpdate(
      { _id: id },
      {
        ...req.body,
      }
    );

    if (!workout) {
      return res.status(400).json({ error: "No such workout" });
    }

    res.status(200).json(workout);
  } catch (error) {
    console.log(error);
  }
};
