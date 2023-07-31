import React, { useState } from "react";
import "../dashboard/DashBoardList.scss";

import voicechat from "../../assets/voice-chat.svg";
import friends from "../../assets/friends.svg";
import chat from "../../assets/chat.svg";
import profile from "../../assets/profile.svg";

const DashBoardList: React.FC<{}> = () => {
  const [activeTab, setActiveTab] = useState("Rooms");

  const handleTabClick = (tab: string) => {
    console.log(tab);
    setActiveTab(tab);
  };
  return (
    <div id="wrapper">
      <div id="left-side">
        <ul>
          <li
            className={`Rooms ${activeTab === "Rooms" ? "active" : ""}`}
            onClick={() => handleTabClick("Rooms")}
          >
            <div className={`icon ${activeTab === "Rooms" ? "active" : ""}`}>
              <img alt="" className="icon" src={voicechat} />
            </div>
            Rooms
          </li>
          <li
            className={`Messages ${activeTab === "Messages" ? "active" : ""}`}
            onClick={() => handleTabClick("Messages")}
          >
            <div className={`icon ${activeTab === "Messages" ? "active" : ""}`}>
              <img alt="" className="icon" src={chat} />
            </div>
            Messages
          </li>
          <li
            className={`Profile ${activeTab === "Profile" ? "active" : ""}`}
            onClick={() => handleTabClick("Profile")}
          >
            <div className={`icon ${activeTab === "pay" ? "active" : ""}`}>
              <img alt="" className="icon" src={profile} />
            </div>
            Profile
          </li>
          <li
            className={`Friends ${activeTab === "Friends" ? "active" : ""}`}
            onClick={() => handleTabClick("Friends")}
          >
            <div className={`icon ${activeTab === "Friends" ? "active" : ""}`}>
              <img alt="" className="icon" src={friends} />
            </div>
            Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoardList;
