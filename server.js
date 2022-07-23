const express = require('express');
const app = express();
app.use(express.json());
const errorHandle = require('./middlewares/errorHandle');

app.get('/', (req, res) => {
  res.send();
});

app.use(require('./routes/withoutToken'));

app.use(errorHandle);

module.exports = app;