import React, { useState } from "react";
import "./Header.scss";
import logout from "../../assets/logout.svg";
import logo from "../../assets/logo.jpeg";

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
        {/* Profil ikonları ve çıkış yap butonu buraya eklenebilir */}
        <div className="profile-icon"></div>
        <button className="logout-button">
          <img width={20} height={20} src={logout} alt="Logo" />
        </button>
      </div>
    </header>
  );
};

export default Header;
