import React, { useState } from "react";
import "../dashboard/DashBoardList.scss";

import voicechat from "../../assets/voice-chat.svg";
import friends from "../../assets/friends.svg";
import chat from "../../assets/chat.svg";
import profile from "../../assets/profile.svg";

const DashBoardList: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState("choose");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div id="wrapper">
      <div id="left-side">
        <ul>
          <li
            className={`choose ${activeTab === "choose" ? "active" : ""}`}
            onClick={() => handleTabClick("choose")}
          >
            <div className={`icon ${activeTab === "choose" ? "active" : ""}`}>
              <img className="icon" src={voicechat} />
            </div>
            Rooms
          </li>
          <li
            className={`pay ${activeTab === "pay" ? "active" : ""}`}
            onClick={() => handleTabClick("pay")}
          >
            <div className={`icon ${activeTab === "pay" ? "active" : ""}`}>
              <img className="icon" src={chat} />
            </div>
            Messages
          </li>
          <li
            className={`wrap ${activeTab === "wrap" ? "active" : ""}`}
            onClick={() => handleTabClick("wrap")}
          >
            <div className={`icon ${activeTab === "pay" ? "active" : ""}`}>
              <img className="icon" src={profile} />
            </div>
            Profile
          </li>
          <li
            className={`ship ${activeTab === "ship" ? "active" : ""}`}
            onClick={() => handleTabClick("ship")}
          >
            <div className={`icon ${activeTab === "pay" ? "active" : ""}`}>
              <img className="icon" src={friends} />
            </div>
            Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardList;
