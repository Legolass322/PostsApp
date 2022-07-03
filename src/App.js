import React, {useState, useMemo} from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Input from './components/UI/input/Input';
import Select from './components/UI/select/Select';
import './styles/App.css';

function App() {
  const [posts, setPosts] = useState([
    {title: '123', body: 'qwe', id: Date.now()-2},
    {title: '234', body: 'abc', id: Date.now()-1},
    {title: '345', body: 'dve', id: Date.now()},
  ])
  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedPosts = useMemo(
    () => {
      if (filter.sort !== '')
        return [...posts].sort(
          (a, b) => a[filter.sort].localeCompare(b[filter.sort])
        )
      return posts
    },
    [filter.sort, posts]
  )
  const sortedAndSearchedPosts = useMemo(
    () => sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase())),
    [filter.query, sortedPosts]
  )

  const createPost = (newPost) => {
    setPosts([newPost, ...posts])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id != post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: '8px 0'}}/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList removePost={removePost} posts={sortedAndSearchedPosts} title='New list'/>
    </div>
  );
}

export default App;