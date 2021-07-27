import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // useSelector,
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import  './form.css';

const Form = () => {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log( 'I am a', dispatch);

  const { addPost } = bindActionCreators(actionCreators, dispatch)

  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log( 'Sending..', post)
    axios.post("https://jsonplaceholder.typicode.com/posts", 
      {
        method: 'POST',
        body: post,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
      }
    )
    .then((res) => addPost(res.data.body))
    .catch(err =>  console.log(err) );
  }

  const handleChange =(e) => {
    const {name, value} = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }))
  }
  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-control">
          <input type="text" name="title" value={post.title} onChange={handleChange}/>
        </div>
        <div className="form-control">
          <textarea cols="35" rows="5" name="body" value={post.body} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
