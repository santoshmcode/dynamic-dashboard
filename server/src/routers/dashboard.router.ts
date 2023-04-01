import express, { Request, Response } from 'express';
import * as fs from 'fs';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    fs.readFile(__dirname + '/../db/dashboard.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        const jsonData = JSON.parse(data);
        return res.send(jsonData);
    });
});

router.get('/:id', (req: Request, res: Response) => {
    console.log("Inside GET /:id")
    fs.readFile(__dirname + '/../db/dashboard.json', 'utf8', (err, data: any) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const id: any = req.params.id
        const jsonData = JSON.parse(data);
        const singleDashBoardData = jsonData[id]
        return res.send(singleDashBoardData);
    });
});

export default router;
