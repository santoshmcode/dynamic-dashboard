import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { getWidgetData } from "../../apis";
import { convertToPx } from "../../helper";
import { useInView } from "react-intersection-observer";

interface PieChart {
    type: {
        name: string;
        subtype: string;
    };
    layout: {
        width: string;
        height: string;
    };
    _id: string;
    position: number;
    title: string;
    data: {
        label: string;
        value: number;
    }[];
    colorScheme: string;
}

interface Prop {
    id: string;
}

function PieGraph({ id }: Prop) {
    const [pieData, setPieData] = useState<PieChart>();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                const data: PieChart = await getWidgetData(id);
                setPieData(data);
            };
            fetchData();
        }
    }, [inView]);

    return (
        <div ref={ref}>
            <PieChart
                margin={{
                    top: 10,
                    bottom: 10,
                    right: 10,
                    left: 10,
                }}
                width={convertToPx(pieData?.layout.width || "400px")}
                height={convertToPx(pieData?.layout.height || "400px")}
            >
                <Tooltip />
                <Pie
                    dataKey="value"
                    startAngle={360}
                    endAngle={0}
                    data={pieData?.data}
                    // cx={200}
                    // cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
            </PieChart>
        </div>
    );
}

export default PieGraph;
