import React, { useEffect, useState } from 'react'
import { DashboardData } from '../../types/types';
import { getDashboard } from '../../apis';

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
      <div>  { lable} </div>
  )
}

export default Dashboard