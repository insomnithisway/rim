import { ILogger } from '@insomni/log';
import { RequestHandler } from 'express';

export default (log: ILogger): RequestHandler => {
    return (req, res, next) => {
        res.on('finish', () => {
            log.info(req.method, req.hostname, req.originalUrl, req.body, res.statusCode);
        });
        next();
    };
};
