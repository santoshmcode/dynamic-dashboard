import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CListGroup, CListGroupItem } from "@coreui/react";
import { getWidgetData } from "../../apis";
interface ListData {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    items: string[];
}

interface Prop {
    id: string;
}

const ListChart = ({ id }: Prop) => {
    const [listData, setListData] = useState<ListData>();
    useEffect(() => {
        const fetchData = async () => {
            const data: ListData = await getWidgetData(id);
            setListData(data);
        };
        fetchData();
    }, []);
    return (
        <div style={{ width: "300px" }}>
            <CListGroup>
                <h3>{listData?.title}</h3>
                {listData?.items.map((items, index) => {
                    return <CListGroupItem key={index}>{items}</CListGroupItem>;
                })}
            </CListGroup>
        </div>
    );
};

export default ListChart;
