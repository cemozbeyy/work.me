import React from "react";
import DashBoardList from "./DashBoardList";
import "../dashboard/Dashboard.scss";

const DashBoard: React.FC<{}> = () => {
  // Doğru kullanım: Bir ReactNode döndürüyor
  return (
    <div className="w-100 d-flex">
      <div className="dashboard-list">
        <DashBoardList />
      </div>
      <div>DashBoard!</div>
    </div>
  );
};

export default DashBoard;
