require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

const path = require('path');
const app = require('./app');
const port = process.env.PORT || 4001;

const model = require('./app/models/User');

app.listen(port, () =>
  console.log(`Server is running on http://localhost:${port}`)
);
