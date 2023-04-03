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
import { useInView } from "react-intersection-observer";

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
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                const data: BarChart = await getWidgetData(id);
                setBarData(data);
            };
            fetchData();
        }
    }, [inView]);

    return (
        <div ref={ref}>
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
