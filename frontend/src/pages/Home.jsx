import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutContext.jsx";

// components
import WorkoutDetails from "../components/workoutDetails.jsx";
import WorkoutForm from "../components/WorkoutForm.jsx";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      if (response) {
        console.log(response);
      } else {
        console.log("Failed to fetch workouts");
      }
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
