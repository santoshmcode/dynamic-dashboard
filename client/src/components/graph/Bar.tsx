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
import { convertToPx } from "../../helper";

interface BarChart {
    position: number;
    title: string;
    layout: {
        width: string;
        height: string;
    };
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
                width={convertToPx(barData?.layout.width || "500px")}
                height={convertToPx(barData?.layout.height || "300px")}
                data={barData?.data}
                margin={{
                    top: 10,
                    bottom: 10,
                    right: 10,
                    left: 10,
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
