import React, { useEffect, useRef, useState } from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";
import { getWidgetData } from "../../apis";

interface BarChart {
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

const BarGraph = ({ id }: Prop) => {
    const [barData, setBarData] = useState<BarChart>();

    useEffect(() => {
        const fetchData = async () => {
            const data: BarChart = await getWidgetData(id);
            setBarData(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <BarChart
                width={500}
                height={300}
                data={barData?.data}
                margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 30,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="y" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default BarGraph;
