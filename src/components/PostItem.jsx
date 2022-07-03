import React from 'react';
import Btn from './UI/button/Btn';

const PostItem = (props) => {
  return (
    <div className="post">
      <div className='post__content'>
        <strong>{props.number}. {props.post.title}</strong>
        <div>
          {props.post.body}
        </div>
      </div> 
      <div className="post__btn">
        <Btn onClick={e=>{props.remove(props.post)}}>Remove</Btn>
      </div>
    </div>
  )
}

export default PostItem;