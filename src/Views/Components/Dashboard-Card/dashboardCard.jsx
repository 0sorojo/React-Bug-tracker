import React from "react"
import "./dashboardCard.css"
import PriorityController from "../../../Controllers/priorityController"

const DashboardCard = (props) => {
  const {level, color} = PriorityController(props.priority);
  
  return (
    <div className="dashboard-card" style={{color:color}}>
      <h2>Total: {level} </h2>
      <p>{props.count}</p>
    </div>
  )
}

export default DashboardCard