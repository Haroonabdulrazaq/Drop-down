import React, { useState } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

const PostForm = () => {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  let post = {};
  const handleSubmit =(e) => {
    e.preventDefault();
    post = {
      title: title,
      body: body,
    }
    console.log(post);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
 

  return (
    <div>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <InputLabel htmlFor="title">Title</InputLabel>
        <Input
          id="title"
          aria-describedby="my-helper-text"
          variant="outline"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
        <InputLabel htmlFor="body">Body</InputLabel>
        <Input
          id="body"
          name="body"
          value={body}
          variant="outline"
          aria-describedby="my-helper-text"
          onChange={(e) => setBody(e.target.value)}
          />
          <br/>
          <br/>
        <Button
         color="primary"
         variant="contained"
         type="submit"
         >
          Submit
        </Button>
      </form>
    </div>
  )
}

export default PostForm;
