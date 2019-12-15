import { Router } from 'express';

export default (router: Router) => {
    router.get('/ping', (req, res) => {
        res.status(200).send({
            data: 'pong'
        });
    });

    return router;
};
