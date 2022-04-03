const path = require('path');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : 'env',
});

const cors = require('cors');
const express = require('express');
const cors_origin = process.env.CORS_ORIGIN;

//configuring express and cors
const app = express();
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'public')));

//importing routes
const adminRoutes = require('./routes/admin.routes');

//configuring routes
app.use('/admins', adminRoutes);

//not found routes
app.get('*', (req, res) => {
  return res.status(404).json({ message: 'Página não encontrada!' });
});

module.exports = app;
