const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const posts = {};

/**
 * Example of posts view
 * posts = {
 *  'postId': {
 *    id: 'postId',
 *    title: 'post title',
 *    comments: [
 *      { id: '', content: '' }
 *    ],
 *  }
 * }
 */

app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  if (type === 'PostCreated') {
    const { id, title } = data;

    posts[id] = { id, title, comments: [] };
  }

  if (type === 'CommentCreated') {
    const { id, content, postId, status } = data;
    const post = posts[postId];

    post.comments.push({ id, content, status });
  }

  if (type === 'CommentUpdated') {
    const { id, content, postId, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((comment) => comment.id === id);

    comment.status = status;
    comment.content = content;
  }

  console.log(posts);

  res.send({});
});

app.listen(4002, () => {
  console.log('listening on port 4002');
});
