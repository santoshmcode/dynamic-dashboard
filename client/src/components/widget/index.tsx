import React, { useEffect, useState } from "react";
import { DashboardData, widgeSmallData } from "../../types/types";
import Pie from "../graph/Pie";
import Line from "../graph/Line";

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
            {subtype === "table" && <div>List</div>}
            {subtype === "multi-graph" && <div>Multi</div>}
            {subtype === "graph" && name === "pie" && (
                <div>
                    <Pie id={data._id} />
                </div>
            )}
            {subtype === "graph" && name === "line" && (
                <div>
                    <Line id={data._id} />
                </div>
            )}
            {subtype === "graph" && name === "bar" && <div>Bar</div>}
        </div>
    );
};

export default Widget;
