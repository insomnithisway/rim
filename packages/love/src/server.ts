import init from './app';
import config from './config';
import { makeLog } from './utils/logger';

const log = makeLog('init')

try {
    init(config.server);
} catch (e) {
    log.error(e);
}
