import React from "react";
import DashBoard from "../components/dashboard/Dashboard";

const DashBoardPage: React.FC<{}> = () => {
  // Doğru kullanım: Bir ReactNode döndürüyor
  return (
    <div>
      <DashBoard />
    </div>
  );
};

export default DashBoardPage;
