const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 3042;

app.use(express.static(path.join(__dirname, '..', '/client/dist')))

app.listen(port, () => {
  console.log(`Server is listening on ${port}`)
})