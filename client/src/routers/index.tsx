import React from 'react'
import { Routes, Route } from 'react-router-dom';

const Routers = () => {
  return (
     <div>
      <Routes>
        <Route path="/" element={<>Dashboard-1</>} />
        <Route path="/D2" element={<>Dashboard-2</>} />
        <Route path="/D3" element={<>Dashboard-3</>} />
      </Routes>
    </div>
  )
}

export default Routers