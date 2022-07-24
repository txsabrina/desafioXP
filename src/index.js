const app = require('./server');
require('dotenv').config();

const port = process.env.API_PORT || 8080;

app.listen(port, () => console.log('ouvindo porta', port));