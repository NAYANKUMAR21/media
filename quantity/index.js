require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
//routers

//middleware
app.use(express.json());
app.use(cors());
//routes

//listen
app.listen(PORT, listening);
async function listening() {
  console.log(`Listening on http://localhost:8080`);
}
