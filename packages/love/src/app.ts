import { logger } from '@insomni/log';
import { Express } from 'express';
import * as express from 'express';
import * as path from 'path';

import logMiddleware from './middlewares/log.middleware';
import routes from './routes';
import { IConfig } from './types/config';

const sysLog = logger('system');
const appLog = logger('application');

const routing = (app: Express, config: IConfig) => {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    // Global middleware
    app.use(logMiddleware(appLog));
    // Initialize routes
    routes.map((route) => {
        const { url, create } = route;
        app.use(path.join(config.api.root, url), create(express.Router()));
    });
};

const listener = (app: Express, config: IConfig) => {
    const { port = 3000, host = 'localhost' } = config.server;

    return app.listen(port, host, () => {
        appLog.info('Server running at', `${host}:${port}`);
    }).on('error', (err) => {
        appLog.info(err);
        throw err;
    });
};

const createInstance = (config: IConfig) => {
    let app;
    try {
        app = express();
        // Application settings
        routing(app, config);
        // Application listener
        return listener(app, config);
    } catch (e) {
        sysLog.error(e.message);
        throw e;
    }
};

export {
    createInstance
};
