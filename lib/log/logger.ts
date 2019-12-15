function stdout (...args: any[]) {
    process.stdout.write(args.join(' ') + '\n');
}

function stderr (...args: any[]) {
    process.stderr.write(args.join(' ') + '\n');
}

function sectumSempra (nm: string = 'default') {
    return {
        error: stderr.bind(null, '[ERROR]', `[${nm.toUpperCase()}]`),
        info: stdout.bind(null, '[INFO]', `[${nm.toUpperCase()}]`),
        log: stdout.bind(null, '[LOG]', `[${nm.toUpperCase()}]`),
        warn: stdout.bind(null, '[WARN]', `[${nm.toUpperCase()}]`)
    };
}

export {
    sectumSempra
};
