interface Dashboard {
    _id: number;
    identifier: string;
    route: string;
    lable: string;
}

interface DashboardData {
    [dashboardId: string]: {
        _id: string;
        position?: number;
    }[];
}

interface Card {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    value: string;
}

interface List {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    items: string[];
}

interface PieGraph {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    data: {
        label: string;
        value: number;
    }[];
}

interface LineGraph {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    data: {
        x: number;
        y: number;
    }[];
    xAxisLabel: string;
    yAxisLabel: string;
}

interface BarGraph {
    type: {
        name: string;
        subtype: string;
    };
    _id: string;
    title: string;
    data: Array<{
        x: number | string;
        y: number;
    }>;
    xAxisLabel: string;
    yAxisLabel: string;
}

interface TableData {
    type: {
        name: string,
        subtype: string
    },
    _id: string,
    title: string,
    data: {
        id: number,
        name: string,
        age: number,
        email: string
    }[],
    columns: {
        key: string,
        header: string
    }[]
}

interface MultiPieGraphData {
    type: {
        name: 'pie';
        subtype: 'multi-graph';
    };
    _id: string;
    title: string;
    data: PieGraph[];
}

interface Widget {
    [key: string]: Card | List | PieGraph | LineGraph | BarGraph | TableData | MultiPieGraphData
}


export { Dashboard, DashboardData, Widget } 