import { IRoute } from '../types/routes';

import systemRoute from './system';

const routes: IRoute[] = [
    {
        create: systemRoute,
        url: '/'
    }
];

export default routes;
