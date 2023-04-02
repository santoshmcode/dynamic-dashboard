import React, { useEffect, useState } from 'react';
import Routers from './routers';
import { Link } from 'react-router-dom';
import './App.css';
import { getAllDashboards } from './apis';
import { DashboardsInterface } from './types/types';



function App() {
  const [allDashboardsData, setAllDashboardsData] = useState<DashboardsInterface[]>([])
  useEffect(() => {
    const fetchDashboards = async() => {
      const data = await getAllDashboards()
      setAllDashboardsData(data)
    } 
    fetchDashboards()
  }, [])
  return (
    <div className="App">
      {allDashboardsData.map(({route,lable,_id}) => <Link key={_id} to={route}>{ lable }</Link>)}
      <Routers data={allDashboardsData} />
    </div>
  );
}

export default App;
