import { Router } from 'express';

import { IConfig } from './config';

export interface IRouterBuilderOptions {
    url: string;
    originalUrl: string;
}

export interface IRouterParams {
    router: Router;
    config: IConfig;
    options: IRouterBuilderOptions;
}

export type TRouterBuilder = (params: IRouterParams) => Promise<Router>;
