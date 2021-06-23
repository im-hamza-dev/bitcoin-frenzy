import React from "react";
import "./dashboard.css";
import Sidebar from "../../components/Sidebar/sidebar";
import Header from "../../components/Header/header";
import History from "../../components/History/history";

function Dashboard() {
  return (
    <>
      <div className="dashboard-parent">
        <Header />
        <div className="flexbox-dashboard">
          <div className="flex-dashboard-restriction">
            <Sidebar />
          </div>
          <History />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
