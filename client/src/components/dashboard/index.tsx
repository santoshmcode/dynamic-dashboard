import React, { useEffect, useState } from 'react'
import { DashboardData } from '../../types/types';
import { getDashboard } from '../../apis';
import Widget from '../widget';

interface Props {
  lable: string;
  identifier: string
}

const Dashboard = ({lable,identifier}: Props) => {
  const [allDashboardsData, setAllDashboardsData] = useState<DashboardData[]>([])
  useEffect(() => {
    const fetchDashboards = async() => {
      const data = await getDashboard(identifier)
      setAllDashboardsData(data)
    } 
    fetchDashboards()
  }, [identifier])
  return (
   <div>{allDashboardsData.map((el, index)=> <div key={el._id}><Widget data={el} /></div>)}</div>
  )
}

export default Dashboard