import React, { useEffect } from 'react';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators } from '../state';

import './post.css';

const PostComponent = () => {
  // const posts =[]
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state);
  console.log(posts);

  useEffect(() => {
    const { fetchPost } = bindActionCreators(actionCreators, dispatch)
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      // console.log(res.data)
      // setPosts(res.data)
      fetchPost(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [dispatch])


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
