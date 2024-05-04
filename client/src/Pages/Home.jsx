import React, { useEffect} from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutContext } from "../hooks/useWorkoutContext";

const Home = () => {
  const {workouts , dispatch} = useWorkoutContext()
  console.log(workouts);

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: data,
        });
      }
    };

    fetchAllWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout) => {
          return <WorkoutDetails key={workout.id} workout={workout} />;
        })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
