import {Router} from 'express';

import {router as routerHome} from './home/home';

const handlers = Router();

handlers.use('/home', routerHome);

export {
    handlers
};
