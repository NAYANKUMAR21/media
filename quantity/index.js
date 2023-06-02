require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const connect = require('./Config/db');
//routers
const UserRouter = require('./router/User.router');
const ProductsROuter = require('./router/Product.router');
//middleware
app.use(express.json());
app.use(cors());
//routes
app.use('/users', UserRouter);
app.use('/products', ProductsROuter);
//listen
app.listen(PORT, listening);
async function listening() {
  await connect();
  console.log(`Listening on http://localhost:8080`);
}
