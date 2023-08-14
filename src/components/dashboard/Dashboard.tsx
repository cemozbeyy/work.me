import React, { useState } from "react";
import DashBoardList from "./DashBoardList";
import "../dashboard/Dashboard.scss";
import { Room } from "../../core/rooms";
import Rooms from "../../pages/Romms/Rooms";
import MessagesPages from "../../pages/Messages/Messages";

const DashBoard: React.FC<{}> = () => {
  const [showCurrentTab, setCurrentTab] = useState<string>("");

  const handleTabClick = (tab: string) => {
    console.log("Tıklanan sekme:", tab);
    setCurrentTab(tab);
  };

  return (
    <div className="w-100 d-flex">
      <div className="dashboard-list">
        <DashBoardList onTabClick={handleTabClick} />
      </div>
      <div className="room-list-container">
        {showCurrentTab === "" || showCurrentTab === "Rooms" ? <Rooms /> : null}
        {showCurrentTab === "Messages" ? <MessagesPages /> : null}
      </div>
    </div>
  );
};

export default DashBoard;
