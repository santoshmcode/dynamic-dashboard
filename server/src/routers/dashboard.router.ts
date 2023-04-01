import express, { Request, Response } from 'express';
import * as fs from 'fs';
import { Dashboard, DashboardData, Widget } from '../types/types';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
    fs.readFile(__dirname + '/../db/allDashboardsData.json', 'utf8', (err, data: string) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }

        const jsonData: Dashboard[] = JSON.parse(data);
        return res.send(jsonData);
    });
});

let count = 0
router.get('/:id', (req: Request, res: Response) => {
    console.log("Inside GET /:id", count++)
    fs.readFile(__dirname + '/../db/dashboardData.json', 'utf8', (err, data: string) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const id: string = req.params.id
        const jsonData: DashboardData = JSON.parse(data);
        const singleDashBoardData = jsonData[id]
        return res.send(singleDashBoardData);
    });
});

router.get('/widget/:id', (req: Request, res: Response) => {
    fs.readFile(__dirname + '/../db/widgetsData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        const { id } = req.params
        const jsonData: Widget = JSON.parse(data);
        return res.send(jsonData[id]);
    });
});

export default router;
