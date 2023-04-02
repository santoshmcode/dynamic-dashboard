import React from 'react'

interface Props {
  lable: string;
}

const Dashboard = ({lable}: Props) => {
  return (
      <div>  { lable}</div>
  )
}

export default Dashboard