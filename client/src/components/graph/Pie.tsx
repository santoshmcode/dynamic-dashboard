import React, { useEffect, useState } from 'react';
import CanvasJSReact from "../../assets/canvasjs.react";
import { getWidgetData } from '../../apis';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

interface PieChart {
    type: {
      name: string;
      subtype: string;
    };
    _id: string;
    position: number;
    title: string;
    data: {
      label: string;
      value: number;
    }[];
    colorScheme: string;
}
  
interface Prop{
    id : string
}
  
function Pie({ id }:Prop) {
    const [pieData, setPieData] = useState<PieChart>();
    useEffect(() => {
      const fetchData = async () => {
          const data: PieChart = await getWidgetData(id)
          setPieData(data)
      };
      fetchData();
    }, []);

    const options = {
        animationEnabled: true,
        title: {
            text: pieData?.title
           },
        data: [{
            type: "pie",
            startAngle: 75,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: pieData?.data.map((item: any) => ({ y: item.value,label: item.label }))
        }]
    };

    return (
        <div>
            <CanvasJSChart containerProps={{ width: '100%', height: '300px' }} options={options} />
        </div>
    );
}

export default Pie;