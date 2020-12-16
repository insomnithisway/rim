import express from 'express';
import bodyParser from 'body-parser';

import {logger} from './utils/logger';
import {handlers} from './handlers/handlers';

const SERVER_PORT = Number(process.env.SERVER_PORT) || 3000;
const SERVER_HOST = process.env.SERVER_HOST || 'localhost';

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(handlers);

app.listen(SERVER_PORT, SERVER_HOST, () => {
    logger(`Server started at http://${SERVER_HOST}:${SERVER_PORT}`);
});
