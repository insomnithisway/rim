import { Response } from 'express';

export function sendJson (res: Response, status: number, data: any) {
    res.status(status).send({
        data,
        status
    });
}
