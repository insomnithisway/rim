function stdout (...args: any[]) {
    process.stdout.write(args.map(stringify).join(' ') + '\n');
}

function stderr (...args: any[]) {
    process.stderr.write(args.join(' ') + '\n');
}

function stringify (item: any) {
    return typeof item === 'string' ? item : JSON.stringify(item);
}

interface ILogger {
    error: (...args: any[]) => void;
    info: (...args: any[]) => void;
    debug: (...args: any[]) => void;
    warn: (...args: any[]) => void;
}

function logger (name: string = 'default'): ILogger {
    return {
        error: stderr.bind(null, `${name}:error`),
        info: stdout.bind(null, `${name}:info`),
        debug: stdout.bind(null, `${name}:debug`),
        warn: stdout.bind(null, `${name}:warn`)
    };
}

export {
    logger,
    ILogger
};
