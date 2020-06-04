import React, { useState } from 'react';
import axios from 'axios';

const CommentCreate = ({ postId }) => {
  const [content, setContent] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content,
    });

    setContent('');
  };

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label>New comment</label>
        <input
          onChange={(e) => setContent(e.target.value)}
          type="text"
          placeholder="Comment"
          value={content}
        />
      </div>
      <button className="ui primary button" type="submit">
        Submit comment
      </button>
    </form>
  );
};

export default CommentCreate;
