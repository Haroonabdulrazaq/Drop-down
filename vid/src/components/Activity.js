import React from 'react';
import { useDispatch } from 'react-redux';

const Activity = (props) => {
  const dispatch = useDispatch();
  const { name, duration } = props;

  const handleDelete = () => {
    console.log("I am deleting...", props);
    dispatch({
      type: 'REMOVE_ACTIVITY',
      payload: props.id
    })
  }
  return (
    <div className="activity-wrapper">
      <p>Activity name: {name}</p>
      <p>Activity duration: {duration}</p>
      <button className="button" onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Activity;
