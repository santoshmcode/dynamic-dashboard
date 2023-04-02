import React, { useEffect, useRef, useState } from "react";
import CanvasJSReact from "../../assets/canvasjs.react";
import axios from "axios";
import { getWidgetData } from "../../apis";

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

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

const Line = ({ id }: Prop) => {
    const [lineData, setLineData] = useState<LineGraph>();
    const chartRef = useRef<typeof CanvasJSChart | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data: LineGraph = await getWidgetData(id);
            setLineData(data);
        };
        fetchData();
    }, [id]);

    useEffect(() => {
        if (
            chartRef.current &&
            lineData?.data.length &&
            lineData?.data &&
            lineData?.data.length > 0
        ) {
            chartRef.current.render();
        }
    }, [lineData]);

    const options = {
        animationEnabled: true,
        theme: "light1",
        title: {
            text: lineData?.title,
        },
        axisY: {
            title: lineData?.yAxisLabel,
            suffix: "",
        },
        axisX: {
            title: lineData?.yAxisLabel,
            prefix: "",
            interval: 2,
        },
        data: [
            {
                type: "line",
                toolTipContent: "Week {x}: {y}%",
                dataPoints: lineData?.data.map((item: any) => ({
                    x: item.x,
                    y: item.y,
                })),
            },
        ],
    };

    return (
        <div>
            {
                <CanvasJSChart
                    options={options}
                    containerProps={{ width: "100%", height: "300px" }}
                    onRef={(ref: any) => (chartRef.current = ref)}
                />
            }
        </div>
    );
};

export default Line;
