import React, { useState, useEffect } from 'react';
import './posts.css';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => setPosts(res))
      .catch(err => console.log(err))
  }, [setPosts])
  return (
    <>
      <h1>Posts</h1>
      <div className="card-wrapper">
        {posts.map((post) => (
          <div key={post.id} className="card">
            <h2 className="title" >{post.title}</h2>
            <p className="body">{post.body}</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Posts;
