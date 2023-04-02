import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { DashboardsInterface } from "../types/types";

const Dashboard = lazy(() => import("../components/dashboard"));

interface Props {
    data: DashboardsInterface[];
}

const Routers = ({ data }: Props) => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {data.map(({ _id, route, lable, identifier }) => (
                        <Route
                            key={_id}
                            path={route}
                            element={
                                <Dashboard
                                    lable={lable}
                                    identifier={identifier}
                                />
                            }
                        />
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default Routers;
