import React, { useEffect} from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";
import { useWorkoutContext } from "../hooks/useWorkoutContext";
import { useAuthContext } from "../hooks/useAuthContext";

const Home = () => {
  const {workouts , dispatch} = useWorkoutContext()
  console.log(workouts);

  const { user } = useAuthContext()

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts" , {
        headers : {
          "Authorization" : `Bearer ${user.token}`
        }
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: data,
        });
      }
    };

    if (user) { 
      fetchAllWorkouts();
    }
    }, [dispatch , user]);

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
