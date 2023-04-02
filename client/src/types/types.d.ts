interface DashboardsInterface {
    _id: number;
    identifier: string;
    route: string;
    lable: string;
}

interface DashboardData {
    [dashboardId: string]: {
        _id: string;
        position?: number;
        type: {
            name: string;
            subtype: string;
        };
    }[];
}

export { DashboardsInterface, DashboardData }