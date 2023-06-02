require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
//routers
const UserRouter = require('./router/User.router');
//middleware
app.use(express.json());
app.use(cors());
//routes
app.use('/users', UserRouter);
//listen
app.listen(PORT, listening);
async function listening() {
  console.log(`Listening on http://localhost:8080`);
}
