interface IConfigApi {
    root: string;
}

export interface IConfigServer {
    port?: number;
    host?: string;
}

export interface IConfig {
    devInstance?: boolean;
    server?: IConfigServer;
    api: IConfigApi;
}
