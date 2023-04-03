import React, { useEffect, useState } from "react";
import { getWidgetData } from "../../apis";
import PieGraph from "./Pie";
import { convertToPx } from "../../helper";
import { useInView } from "react-intersection-observer";

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

interface Prop {
    id: string;
}

const MultiChart = ({ id }: Prop) => {
    const [multiData, setMultiData] = useState<MultiData>();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (!inView) return;
        const fetchData = async () => {
            const data: MultiData = await getWidgetData(id);
            setMultiData(data);
        };
        fetchData();
    }, [inView]);

    return (
        <div
            ref={ref}
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
