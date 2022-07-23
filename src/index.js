const app = require('./server');
require('dotenv').config();

const port = process.env.API_PORT;

app.listen(port, () => console.log('ouvindo porta', port));