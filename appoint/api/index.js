const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const port = process.env.PORT || 3000;
const app = express()

app.use(logger('dev'));


app.get('/', (req, res) => {
    res.send('<h1>Front Page</h1>');
  });

app.use('/api', logger('dev'), require('./routes/api.route'));

logger.token('host', function(req, res) {
    return req.hostname;
});

app.use((req, res, next) => {
    next(createError.NotFound());
});

app.listen(port, () => {
    console.log( `App is running on port ${port}`)
})