const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const event = req.body;

  console.log(event);

  await axios.post('http://localhost:4000/events', event); // posts
  await axios.post('http://localhost:4001/events', event); // comments
  await axios.post('http://localhost:4002/events', event); // query
  await axios.post('http://localhost:4003/events', event); // moderation

  res.status({ status: 'OK' });
});

app.get('/events', (req, res) => {});

app.listen(4005, () => {
  console.log('Listening on 4005');
});
