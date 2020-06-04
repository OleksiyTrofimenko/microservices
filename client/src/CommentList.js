import React from 'react';

const CommentList = ({ comments }) => {
  if (!comments) {
    return <div className="ui list">No comments</div>;
  }

  const renderedComments = comments.map((comment) => {
    return (
      <li className="item" key={comment.id}>
        {comment.content}
      </li>
    );
  });

  return <ol className="ui list">{renderedComments}</ol>;
};

export default CommentList;
