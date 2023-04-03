import React, { useEffect, useState } from "react";
import { getWidgetData } from "../../apis";
import PieGraph from "./Pie";
import { convertToPx } from "../../helper";

interface MultiData {
    type: {
        name: "pie";
        subtype: "multi-graph";
    };
    _id: string;
    layout: {
        width: string;
        height: string;
    };
    title: string;
    data: {
        type: {
            name: "pie";
            subtype: "graph";
        };
        __id: string;
    }[];
}

interface Porp {
    id: string;
}

const MultiChart = ({ id }: Porp) => {
    const [multiData, setMultiData] = useState<MultiData>();

    useEffect(() => {
        const fetchData = async () => {
            const data: MultiData = await getWidgetData(id);
            setMultiData(data);
        };
        fetchData();
    }, []);

    return (
        <div
            style={{ width: convertToPx(multiData?.layout.width || "500px") }}
            className="multi"
        >
            {multiData?.data.map((el, index) => (
                <div key={index}>
                    <PieGraph id={el.__id} />
                </div>
            ))}
        </div>
    );
};

export default MultiChart;
