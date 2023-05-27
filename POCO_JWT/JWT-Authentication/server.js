require('dotenv').config();

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
app.use(express.json());
app.use(cors());

const posts = [
  {
    username: 'nayankumar',
    title: 'Post 1',
  },
  {
    username: 'Jim',
    title: 'Post 2',
  },
];

app.get('/posts', authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, 'ACCESS_TOKEN_SECRET', (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
}

app.listen(8008, () => {
  console.log('running on 8008');
});
