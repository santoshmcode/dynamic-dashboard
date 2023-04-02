interface DashboardsInterface {
    _id: number;
    identifier: string;
    route: string;
    lable: string;
}

interface DashboardData {
    _id: string;
    position?: number;
    type: {
        name: string;
        subtype: string;
    };
}

interface widgeSmallData {
    _id: string;
    type: {
        name: string;
        subtype: string;
    };
    position?: number;
}

export { DashboardsInterface, DashboardData, widgeSmallData }