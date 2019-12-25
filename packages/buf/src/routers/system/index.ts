import { TRouterBuilder } from '../../types/routers';
import { sendJson } from '../../utils/response.util';

const routerBuilder: TRouterBuilder = ({ router, config, options }) => {
    return new Promise((resolve) => {
        router.get('/ping', (req, res) => {
            sendJson(res, 200, 'pong');
        });

        resolve(router);
    });
};

export default routerBuilder;
