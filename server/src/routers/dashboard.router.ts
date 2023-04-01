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

let count = 0
router.get('/:id', (req: Request, res: Response) => {
    console.log("Inside GET /:id", count++)
    fs.readFile(__dirname + '/../db/dashboard.json', 'utf8', (err, data: any) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const id: string = req.params.id
        const jsonData = JSON.parse(data);
        const singleDashBoardData = jsonData[id]
        return res.send(singleDashBoardData);
    });
});

router.get('/:id/widget/:id2', (req: Request, res: Response) => {
    console.log("Inside GET widget /:id",)
    fs.readFile(__dirname + '/../db/dashboard.json', 'utf8', (err, data: any) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        console.log("req.params",)
        const { id, id2 } = req.params
        console.log('id2:', id2, 'id:', id)
        const jsonData = JSON.parse(data);
        const singleDashBoardData = jsonData[id].filter((el: any) => el._id === id2)
        return res.send(singleDashBoardData[0]);
    });
});

export default router;
