import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './post.css';

const PostComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      console.log(res.data)
      setPosts(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [setPosts])


  return (
    <div className="post-wrapper">
      {
        posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
    </div>
  )
}

export default PostComponent;
