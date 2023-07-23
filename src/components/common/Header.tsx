import React, { useState } from "react";
import "./Header.scss";
import logout from "../../assets/logout.svg";
import profile from "../../assets/profile.svg";

const Header: React.FC<{}> = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <header className="header-container">
      <section className="left-side">
        <div className="logo">W | Work.me</div>
        <div className="spacing"></div>
        <div className={`input-container ${isFocused ? "focused" : ""}`}>
          <input
            type="text"
            placeholder="Search"
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </section>
      <div className="profile">
        <div className="profile-icon">
          <img width="100%" height="100%" src={profile} alt="Logo" />
        </div>
        <button className="logout-button">
          <img width={20} height={20} src={logout} alt="Logo" />
        </button>
      </div>
    </header>
  );
};

export default Header;
