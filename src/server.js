const express = require('express');
const app = express();
app.use(express.json());
const { errorHandle, auth } = require('./middlewares');

app.get('/', (req, res) => {
  res.send();
});

app.use(require('./routes/withoutToken'));

app.use(auth);

app.use(require('./routes/withToken'));

app.use(errorHandle);

module.exports = app;