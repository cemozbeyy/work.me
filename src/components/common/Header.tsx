import React, { useState } from "react";
import "./Header.scss";
import { UserButton } from "@clerk/clerk-react";

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
        <UserButton afterSignOutUrl="/sign-in" />
      </div>
    </header>
  );
};

export default Header;
