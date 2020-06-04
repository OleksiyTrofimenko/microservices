import React, { useState } from 'react';
import axios from 'axios';

const PostCreate = () => {
  const [title, setTitle] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:4000/posts', {
      title,
    });

    setTitle('');
  };

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <input
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
          value={title}
        />
      </div>
      <button className="ui primary button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default PostCreate;
