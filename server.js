const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const cors = require('cors');
const logger = require('morgan');

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
