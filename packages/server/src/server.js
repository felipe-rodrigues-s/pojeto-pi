const path = require('path');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : 'env',
});

const app = require('./app');
const port = process.env.PORT || 4001;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
