import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/Select';

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
    <Input 
      value={filter.query}
      onChange={e => setFilter({
        ...filter,
        query: e.target.value
      })}
      placeholder='Search'
    />
    <Select
      defaultValue="Sort by"
      options={[
      {value: 'title', name: 'By name'},
      {value: 'body', name: 'By description'}
      ]}
      value={filter.sort}
      onChange={sort => setFilter({
        ...filter,
        sort: sort
      })}
    />
    </div>
  )
}

export default PostFilter;