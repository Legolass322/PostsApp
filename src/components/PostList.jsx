import React from 'react';
import PostItem from './PostItem';

const PostList = ({posts, title, removePost}) => {
  if (!posts.length) return (
    <h1 style={{textAlign: 'center', margin: '8px 0'}}></h1>
  )
  return (
    <div className="post-list">
      <h1 style={{textAlign: 'center'}}>{title}</h1>
      {posts.map((post, index) => 
        <PostItem remove={removePost} number={index + 1} post={post} key={post.id}/>
      )}
    </div>
  )
}

export default PostList;