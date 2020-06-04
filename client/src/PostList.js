import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:4002/posts');

    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const mappedPosts = Object.values(posts);

  console.log(mappedPosts);

  const renderedPosts = mappedPosts.map((post) => {
    return (
      <div className="ui card" key={post.id}>
        <div className="content">
          <div className="header">{post.title}</div>
          <div className="content">
            <CommentList comments={post.comments} />
          </div>
          <hr />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  if (!mappedPosts.length) {
    return <div className="ui">No posts yet</div>;
  }

  return <div className="ui cards">{renderedPosts}</div>;
};

export default PostList;
