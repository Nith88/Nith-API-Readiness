const express = require('express');
const app = express();

const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middleware/errorHandler');
const notFound = require('./middleware/notFound');

app.use(express.json());

app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;