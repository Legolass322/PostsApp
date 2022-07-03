import React, {useState} from 'react';
import Btn from './UI/button/Btn';
import Input from './UI/input/Input';

const PostForm = ({create}) => {
  const [formPost, setFormPost] = useState({
    title: '',
    body: ''
  })
  const addNewPost = e => {
    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title: formPost.title,
      body: formPost.body,
    }
    create(newPost)
    setFormPost({
      title: '',
      body: ''
    })
  }
  return (
    <form>
    <Input type='text' placeholder='Enter title'
      value={formPost.title} onChange={e=>setFormPost({
      ...formPost,
      title: e.target.value,
      })}
    />
    <Input type='text' placeholder='Enter description'
      value={formPost.body} onChange={e=>setFormPost({
      ...formPost,
      body: e.target.value,
      })}
    />
    <Btn onClick={addNewPost}>Create Post</Btn>
    </form>
  )
}

export default PostForm;