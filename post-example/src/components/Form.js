import React, { useState } from 'react';

import  './form.css'

const Form = () => {
  const [post, setPost] = useState({
    title: '',
    body: ''
  });

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log(post)
    setPost({
      title: '',
      body: '',
    })
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
          <input type="text" name="body" value={post.body} onChange={handleChange}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;
