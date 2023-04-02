import express, { Request, Response } from 'express';
import * as fs from 'fs';
import { Dashboard, DashboardData, Widget } from '../types/types';
import { changePositionOfWidget } from "../helper"

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

router.get('/:id', (req: Request, res: Response) => {
    fs.readFile(__dirname + '/../db/dashboardData.json', 'utf8', (err, data: string) => {
        try {
            const id: string = req.params.id
            const jsonData: DashboardData = JSON.parse(data);
            const singleDashBoardData = jsonData[id]
            if (singleDashBoardData === undefined) throw new Error
            return res.send(singleDashBoardData);
        } catch (err) {
            return res.status(500).send('dashboard data you are looking for is not found')
        }
    });
});

router.get('/widget/:id', (req: Request, res: Response) => {
    fs.readFile(__dirname + '/../db/widgetsData.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);

        }
        const { id } = req.params
        try {
            const jsonData: Widget = JSON.parse(data);
            if (jsonData[id] === undefined) throw new Error
            return res.send(jsonData[id]);
        } catch (error) {
            return res.status(500).send(`Widget for id ${id} is not found`);
        }
    });
});

router.post('/:id/widget/:id2', (req: Request, res: Response) => {
    const { position }: { position: number } = req.body;
    fs.readFile(__dirname + '/../db/dashboardData.json', 'utf8', (err, data: string) => {
        try {
            const { id, id2 } = req.params
            const jsonData: DashboardData = JSON.parse(data);
            const singleDashBoardData = jsonData[id]
            const newArray = changePositionOfWidget(singleDashBoardData, id2, position - 1)
            if (Array.isArray(newArray)) {
                jsonData[id] = newArray
            }
            let data2 = JSON.stringify(jsonData)
            fs.writeFile(__dirname + '/../db/dashboardData.json', data2, (err) => {
                if (err) throw new Error
            })
            return res.send(newArray);
        } catch (error: unknown) {
            console.log('error:', error)
            return res.status(500).send({ error: "Item with id not found" })
        }
    });
})

export default router;
