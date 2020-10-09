import React from "react"
import "./dashboard.css"
import DashboardCard from "../../Components/Dashboard-Card/dashboardCard"

const Dashboard = () => {
  
  return (
    <div className="page-container">
    <DashboardCard priority="1" count="10"/>
    </div>
  )
}


export default Dashboard