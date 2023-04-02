import React, { useState, useEffect } from "react";
import axios from "axios";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import { getWidgetData } from "../../apis";

interface TableData {
    type: {
        name: "table";
        subtype: "table";
    };
    _id: string;
    title: string;
    data: {
        id: number;
        name: string;
        age: number;
        email: string;
    }[];
    columns: {
        key: keyof { id: number; name: string; age: number; email: string };
        header: string;
    }[];
}

interface TableItem {
    id: number;
    name: string;
    age: number;
    email: string;
}

interface ColumnItem {
    key: keyof TableItem;
    header: string;
}

interface RowItem {
    id: number;
    name: string;
    range1: number;
    range2: string;
}

interface Prop {
    id: string;
}

const TableChart = ({ id }: Prop) => {
    const [tableData, setTableData] = useState<TableData>();
    const [tabular, setTabular] = useState<TableItem[]>([]);
    const [columns, setColumns] = useState<ColumnItem[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: TableData = await getWidgetData(id);
            setTableData(data);
            setTabular(data.data);
            setColumns(data.columns);
        };
        fetchData();
    }, []);

    const createData = (
        id: number,
        name: string,
        range1: number,
        range2: string
    ): RowItem => {
        return { id, name, range1, range2 };
    };

    const rows: RowItem[] = tabular.map((item: TableItem) =>
        createData(item.id, item.name, item.age, item.email)
    );
    return (
        <div>
            <Box>
                <Box width={"100%"} marginTop={3}>
                    <h2>{tableData?.title}</h2>
                    <TableContainer component={Paper}>
                        <Table
                            sx={{ minWidth: 450 }}
                            aria-label="caption table"
                        >
                            <caption>Table</caption>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell key={column.key}>
                                            {column.header}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ textAlign: "start" }}
                                        >
                                            {row.range1}
                                        </TableCell>
                                        <TableCell
                                            align="center"
                                            style={{ textAlign: "start" }}
                                        >
                                            {row.range2}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </div>
    );
};
export default TableChart;