import React, { useEffect, useRef, useState } from "react";
import { getWidgetData } from "../../apis";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

interface LineGraph {
    position: number;
    title: string;
    data: Array<{
        x: string;
        y: number;
    }>;
    xAxisLabel: string;
    yAxisLabel: string;
    color: string;
}
interface Prop {
    id: string;
}

const LineGraph = ({ id }: Prop) => {
    const [lineData, setLineData] = useState<LineGraph>();

    useEffect(() => {
        const fetchData = async () => {
            const data: LineGraph = await getWidgetData(id);
            setLineData(data);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            {
                <LineChart
                    width={500}
                    height={300}
                    data={lineData?.data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                        type="monotone"
                        dataKey="y"
                        stroke="#82ca9d"
                        activeDot={{ r: 3 }}
                    />
                </LineChart>
            }
        </div>
    );
};

export default LineGraph;
