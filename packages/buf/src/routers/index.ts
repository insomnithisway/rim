import { Express, Router } from 'express';
import * as path from 'path';

import { IConfig } from '../types/config';
import { IRouterBuilderOptions, TRouterBuilder } from '../types/routers';

import systemRouter from './system';

const routers = {
    '/': systemRouter
};

const pathBuild = (url: string, root: string) => {
    return path.join(root, url);
};

const makeRouters = (app: Express, config: IConfig) => {
    const { root } = config.api;
    return Object.entries(routers).map(([originalUrl, makeRouter]) => {
        const url = pathBuild(originalUrl, root);
        const router = Router();
        const options: IRouterBuilderOptions = { url, originalUrl };
        app.use(url, router);
        return makeRouter({
            router,
            config,
            options
        });
    });
};

export {
    makeRouters
};
