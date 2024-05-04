import { useContext } from "react"
import { WorkoutContext } from "../context/WorkoutContext"

export const useWorkoutContext = () => {
    return useContext(WorkoutContext)
}