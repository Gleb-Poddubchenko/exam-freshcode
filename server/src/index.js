const http = require('http');
require('dotenv').config();

const express = require('express');
const cors = require('cors');

const connectMongo = require('./dbMongo/mongoose');
const router = require('./router');
const controller = require('./socketInit');
const handlerError = require('./handlerError/handler');

const PORT = process.env.PORT || 3000;
const app = express();

connectMongo();

app.use(cors());
app.use(express.json());

app.use('/public', express.static('public'));
app.use(router);
app.use(handlerError);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

controller.createConnection(server);