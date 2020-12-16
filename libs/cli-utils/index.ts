export const createLogger = (namespace: string) => {
    return (...data: unknown[]): void => {
        console.log(`[${namespace}]`, ...data);
    };
};
