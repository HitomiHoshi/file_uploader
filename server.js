const express = require("express");
const cors = require('cors');
const multer = require('multer');

const app = express();
const upload = multer({ dest: 'upload/'});

app.use(cors());
// app.use(express.static("."));
// app.use(express.json());

app.post('/upload', upload.single('motivate-desktop'), function (req, res, next) {
    console.log(req.body);
    res.send("nice");
  });

app.get('/', (req, res) => {
    res.send("hello");
  });

  // set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
  });
  