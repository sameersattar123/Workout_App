import React, { useState } from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutContext'

const WorkoutForm = () => {
  const [title, setTitle] = useState("")
  const [reps, setReps] = useState('')
  const [load, setLoad] = useState("")
  const [error, setError] = useState(null)

  const {dispatch} = useWorkoutContext()

  const handleSubmit = async(e) => {
    e.preventDefault() 

    const workout = {title, load, reps}

    const response = await fetch('http://localhost:4000/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout), 
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json()

    if (!response.ok) {
      setError(data.error)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      console.log('new workout added:', data)
      dispatch({
        type: "CREATE_WORKOUTS",
        payload: data
      })
    }

  }
  return (
    <form className="create" onSubmit={handleSubmit}> 
    <h3>Add a New Workout</h3>

    <input 
        type="text" 
        onChange={(e) => setTitle(e.target.value)} 
        value={title}
        required={true}
      />

      <label>Load (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setLoad(e.target.value)} 
        value={load}
        required={true}
      />

      <label>Number of Reps:</label>
      <input 
        type="number" 
        onChange={(e) => setReps(e.target.value)} 
        value={reps} 
        required={true}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}

    </form>
  )
}

export default WorkoutForm