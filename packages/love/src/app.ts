import * as express from 'express';

import { makeLog } from './utils/logger';

const log = makeLog();

const init = (options) => {
    const app = express();

    return app.listen(options, (err) => {
        if (err) {
            throw Error(err);
        }
        log.info('Server started with options', JSON.stringify(options));
    });
};

export default init;
