// create server     
const express = require('express');
const app = express();
const port = 3000;

// create server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// create server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});