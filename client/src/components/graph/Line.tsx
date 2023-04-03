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
import { convertToPx } from "../../helper";
import { useInView } from "react-intersection-observer";

interface LineGraph {
    position: number;
    title: string;
    data: Array<{
        x: string;
        y: number;
    }>;
    layout: {
        width: string;
        height: string;
    };
    xAxisLabel: string;
    yAxisLabel: string;
    color: string;
}

interface Prop {
    id: string;
}

const LineGraph = ({ id }: Prop) => {
    const [lineData, setLineData] = useState<LineGraph>();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                const data: LineGraph = await getWidgetData(id);
                setLineData(data);
            };
            fetchData();
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <LineChart
                width={convertToPx(lineData?.layout.width || "500px")}
                height={convertToPx(lineData?.layout.height || "300px")}
                data={lineData?.data}
                margin={{
                    top: 10,
                    bottom: 10,
                    right: 10,
                    left: 10,
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
        </div>
    );
};

export default LineGraph;
