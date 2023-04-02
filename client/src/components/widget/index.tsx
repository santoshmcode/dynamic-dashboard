import React, { useEffect, useState } from "react";
import { DashboardData, widgeSmallData } from "../../types/types";
import PieGraph from "../graph/Pie";
import LineGraph from "../graph/Line";
import BarGraph from "../graph/Bar";
import TableChart from "../graph/Table";

interface Prop {
    data: DashboardData;
}

const Widget = ({ data }: Prop) => {
    const [name, setName] = useState<string>("");
    const [subtype, setSubtype] = useState("");
    useEffect(() => {
        setName(data.type.name);
        setSubtype(data.type.subtype);
    }, []);

    return (
        <div>
            {subtype === "card" && <div>Card</div>}
            {subtype === "list" && <div>List</div>}
            {subtype === "table" && (
                <div>
                    <TableChart id={data._id} />
                </div>
            )}
            {subtype === "multi-graph" && <div>Multi</div>}
            {subtype === "graph" && name === "pie" && (
                <div>
                    <PieGraph id={data._id} />
                </div>
            )}
            {subtype === "graph" && name === "line" && (
                <div>
                    <LineGraph id={data._id} />
                </div>
            )}
            {subtype === "graph" && name === "bar" && (
                <div>
                    <BarGraph id={data._id} />
                </div>
            )}
        </div>
    );
};

export default Widget;
