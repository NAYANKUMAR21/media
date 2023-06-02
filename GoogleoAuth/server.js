//requires or import
const express = require('express');
const app = express();
const cors = require('cors');

//middleware
app.use(express.json());
app.use(cors());
//routes
// app.use('/');

app.get('/', (req, res) => {
  return res
    .status(200)
    .send({ message: 'welcome to homepage of GoogleOauth backend' });
});

//listening
app.listen(8080, async () => {
  console.log(`Listening on http://localhost:8080`);
});
