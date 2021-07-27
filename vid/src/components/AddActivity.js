import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: '',
    duration: '',
  });

  const handleChange = (e) => {
    setData((prevState) => ({
      ...prevState,
      [e.target.name] : e.target.value,
    }))
  }
  const addActivity = () => {
    data.id = new Date().getTime()
    console.log(data);
    dispatch({ type: 'ADD_ACTIVITY' , payload: data })
    setData({
      name: '',
      duration: ''
    })
  }
  return (
    <div className="add">
      <div className="input-section">
        <p>Activity name:</p>
        <input onChange={handleChange}  name="name" value={data.name} placeholder="Activity name"/>
      </div>
      <div className="input-section">
        <p>Duration:</p>
        <input  onChange={handleChange} name="duration" value={data.duration} placeholder="Activity duration"/>
      </div>
      <button onClick={addActivity}>Submit</button>
    </div>
  )
}

export default AddActivity;
