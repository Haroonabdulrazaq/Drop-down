import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Activity from './Activity';
import AddActivity from './AddActivity';

const Workouts = () => {
  const activities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);

  return (
    <div className="workouts-wrapper">
      <button onClick={() => setAdd(!add)}>Add activity</button>
      {add && <AddActivity />}
      {
        activities.map((activity) => (
          <Activity key={activity.id} {...activity}/>
        ))
      }
    </div>
  )
}

export default Workouts;
