import express, { Request, Response } from 'express';
import * as fs from 'fs';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    fs.readFile('db/dashbord-one.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        const jsonData = JSON.parse(data);
        return res.send(jsonData);
    });
});

export default router;
