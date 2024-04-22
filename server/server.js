const express = require("express");
const app = express();
const env = require('dotenv').config();
const path = require('path');
const port = process.env.DOM_PORT;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client/views/'));
app.use(express.static(path.join(__dirname, '../client/public/')));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(port, () => {
  console.log(`Server is Listening at Port : ${port}`);
})
