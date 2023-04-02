import React, { useEffect, useState } from "react";
import { CRow, CCol, CWidgetStatsB } from "@coreui/react";
import { getWidgetData } from "../../apis";

interface CardData {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    value: string;
}

interface Prop {
    id: string;
}

const CardChart = ({ id }: Prop) => {
    const [Pieline, setData] = useState<any>([]);
    const [cardData, setCardData] = useState<CardData>();

    useEffect(() => {
        const fetchData = async () => {
            const data: CardData = await getWidgetData(id);
            setCardData(data);
        };
        fetchData();
    }, []);
    return (
        <div style={{ width: "200px", height: "200px" }} className="card">
            <div className="card-title">{cardData?.title}</div>
            <div className="card-value">{cardData?.value}</div>
        </div>
    );
};

export default CardChart;
