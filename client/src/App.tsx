import React, { useEffect, useState } from "react";
import Routers from "./routers";
import { Link, useLocation } from "react-router-dom";
import "./App.css";
import { getAllDashboards } from "./apis";
import { DashboardsInterface } from "./types/types";

function App() {
    const [allDashboardsData, setAllDashboardsData] = useState<
        DashboardsInterface[]
    >([]);
    const [activeLink, setActiveLink] = useState("");

    const location = useLocation();

    useEffect(() => {
        const fetchDashboards = async () => {
            const data = await getAllDashboards();
            setAllDashboardsData(data);
        };
        fetchDashboards();
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    return (
        <div className="App">
            <nav className="navbar">
                {allDashboardsData.map(({ route, lable, _id }) => (
                    <Link
                        key={_id}
                        to={route}
                        className={route === activeLink ? "active" : ""}
                    >
                        {lable}
                    </Link>
                ))}
            </nav>
            <main className="main">
                <Routers data={allDashboardsData} />
            </main>
        </div>
    );
}

export default App;
