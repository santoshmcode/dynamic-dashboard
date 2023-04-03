import React, { useEffect, useState } from "react";
import { CRow, CCol, CWidgetStatsB } from "@coreui/react";
import { getWidgetData } from "../../apis";
import { convertToPx } from "../../helper";
import { useInView } from "react-intersection-observer";

interface CardData {
    type: {
        name: string;
        subtype: string;
    };
    layout: {
        width: string;
        height: string;
    };
    _id: string;
    title: string;
    value: string;
}

interface Prop {
    id: string;
}

const CardChart = ({ id }: Prop) => {
    const [cardData, setCardData] = useState<CardData>();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                const data: CardData = await getWidgetData(id);
                setCardData(data);
            };
            fetchData();
        }
    }, [inView]);
    return (
        <div
            ref={ref}
            style={{
                width: convertToPx(cardData?.layout.width || "200px"),
                height: convertToPx(cardData?.layout.height || "200px"),
            }}
            className="card"
        >
            <div className="card-title">{cardData?.title}</div>
            <div className="card-value">{cardData?.value}</div>
        </div>
    );
};

export default CardChart;
