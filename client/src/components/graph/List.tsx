import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { CListGroup, CListGroupItem } from "@coreui/react";
import { getWidgetData } from "../../apis";
import { convertToPx } from "../../helper";
import { useInView } from "react-intersection-observer";
interface ListData {
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
    items: string[];
}

interface Prop {
    id: string;
}

const ListChart = ({ id }: Prop) => {
    const [listData, setListData] = useState<ListData>();
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            const fetchData = async () => {
                const data: ListData = await getWidgetData(id);
                setListData(data);
            };
            fetchData();
        }
    }, [inView]);
    return (
        <div
            ref={ref}
            style={{
                width: `${convertToPx(listData?.layout.width || "300px")}`,
                margin: 30,
            }}
        >
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
