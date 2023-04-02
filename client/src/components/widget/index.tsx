import React, { useEffect, useState } from 'react'
import { DashboardData, widgeSmallData } from '../../types/types'


interface Prop{
    data : DashboardData
}

const Widget = ({ data }:Prop) => {
    const [name, setName] = useState<string>("")
    const [subtype, setSubtype] = useState("")
    useEffect(() => {
        console.log('data:', data)
        setName(data.type.name)
        setSubtype(data.type.subtype)

        return () => {
          
      }
    }, [name,subtype])

  return (
      <div>
          {subtype === "card" && <div>Card</div>}
          {subtype === "list" && <div>List</div>}
          {subtype === "table" && <div>List</div>}
          {subtype === "multi-graph" && <div>Multi</div>}
          {subtype === "graph" && name === "pie" && <div>Pie</div>}
          {subtype === "graph" && name === "line" && <div>Line</div>}
          {subtype === "graph" && name === "bar" && <div>Bar</div>}
      </div>
  )
}

export default Widget