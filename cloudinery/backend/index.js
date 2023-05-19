const express = require('express');
const multer = require('multer');
const connect = require('./db');
const app = express();
const upload = multer({ dest: 'uploads/' });
const cloudinary = require('cloudinary').v2;
const fileupload = require('express-fileupload');
// Configuration
cloudinary.config({
  cloud_name: 'dc3akfh6t',
  api_key: '214865784644541',
  api_secret: 'gbTY5eaj1GuX8UW9uNu5sqfAW3I',
});
app.use(express.json());
app.use(
  fileupload({
    useTempFiles: true,
    limits: { fileSize: 50 * 2024 * 1024 },
  })
);
app.post('/', async function (req, res) {
  const fileKey = req.files.pdf;
  const result = await cloudinary.uploader.upload(fileKey.tempFilePath, {
    public_id: `${Date.now()}`,
    resource_type: 'auto',
    folder: 'uploads',
  });
  console.log(req.files, result);
  return res
    .status(200)
    .send({ message: 'Request completed', URL: result.url, fileKey, result });
});
app.listen(8080, async () => {
  await connect();
  console.log(`Listening on http://localhost:8080`);
});
