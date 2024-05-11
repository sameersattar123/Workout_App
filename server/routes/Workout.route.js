import express from "express"
import { createWorkout, deleteWorkout, getSingleWorkout, getWorkouts, updateWorkout } from "../controllers/Workout.Controller.js"
import requireAuth from "../middleware/requireAuth.js"

const router = express.Router()

router.use(requireAuth)

// GET all workouts
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getSingleWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a workout
router.delete('/:id', deleteWorkout)

// UPDATE a workout
router.patch('/:id', updateWorkout)

export default router;