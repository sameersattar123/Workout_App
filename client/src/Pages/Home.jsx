import React, { useEffect, useState } from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutDetails from "../components/WorkoutDetails";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);
  console.log(workouts);

  useEffect(() => {
    const fetchAllWorkouts = async () => {
      const response = await fetch("http://localhost:4000/api/workouts");
      const json = await response.json();

      if (response.ok) {
        setWorkouts(json);
      }
    };

    fetchAllWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts.map((workout) => {
          return <WorkoutDetails key={workout.id} workout={workout} />;
        })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
