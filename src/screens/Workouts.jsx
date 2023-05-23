import React, {useEffect, useState, useContext} from 'react'
import axios from 'axios'

import classes from './Workouts.module.css'
import AuthContext from '../global-components/AuthContext'

const Workouts = () => {
  const [workouts, setWorkouts] = useState([])
  const {userId} = useContext(AuthContext)

  useEffect(() => {
    axios.get(`/api/getUserWorkoutsAndSetsReps/${userId}`).then((res) => {
      console.log(res.data)
    })
  }, [])

  return (
    <div className={classes.workouts_container}>Workouts</div>
  )
}

export default Workouts