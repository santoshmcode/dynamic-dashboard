import React from 'react';

import './App.css';
import Routers from './routers';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/">Dashbord 1</Link>
      <Link to="/d2">Dashbord 2</Link>
      <Link to="/d3">Dashbord 3</Link>
      <Routers/>
    </div>
  );
}

export default App;
