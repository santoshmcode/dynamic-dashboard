import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import { getWidgetData } from "../../apis";

interface PieChart {
    type: {
        name: string;
        subtype: string;
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
    useEffect(() => {
        const fetchData = async () => {
            const data: PieChart = await getWidgetData(id);
            setPieData(data);
        };
        fetchData();
    }, [id]);

    return (
        <div>
            <PieChart
                margin={{
                    top: 30,
                    right: 30,
                    left: 30,
                    bottom: 30,
                }}
                width={400}
                height={400}
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
