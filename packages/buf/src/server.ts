import { createInstance } from './app';
import config from './config/current';

createInstance(config).catch(() => {
    process.exit(1);
});
