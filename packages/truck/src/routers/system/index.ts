import { TRouterBuilder } from '../../types/routers';

const routerBuilder: TRouterBuilder = async ({ router, config, options }) => {
    return new Promise((resolve, reject) => {
        router.get('/ping', (req, res) => {
            res.status(200).send({
                data: 'pong'
            });
        });

        resolve(router);
    });
};

export default routerBuilder;
