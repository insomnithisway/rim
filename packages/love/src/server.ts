import { createInstance } from './app';
import config from './config/current';

try {
    const instance = createInstance(config);
} catch (e) {
    process.exit(1);
}
