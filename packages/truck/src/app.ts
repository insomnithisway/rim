import { logger } from '@insomni/log';
import { Express } from 'express';
import * as express from 'express';

import logMiddleware from './middlewares/log.middleware';
import { makeRouters } from './routers';
import { IConfig } from './types/config';

const sysLog = logger('system');
const appLog = logger('application');

const routing = (app: Express, config: IConfig) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(logMiddleware(appLog));
    return Promise.all(makeRouters(app, config));
};

const listener = (app: Express, config: IConfig) => {
    const { port = 3000, host = 'localhost' } = config.server;
    return app.listen(port, host, () => {
        appLog.info('Server running at', `${host}:${port}`);
    }).on('error', (err) => {
        appLog.error(err.message);
        throw Error();
    });
};

const createInstance = (config: IConfig) => {
    const app = express();
    return routing(app, config).then(() => {
        return listener(app, config);
    }).catch((err) => {
        sysLog.error(err.message);
        throw Error();
    });
};

export {
    createInstance
};
