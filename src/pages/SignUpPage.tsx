import React from "react";
import SignUp from "../components/auth/SignUp";

const SignUpPage: React.FC<{}> = () => {
  // Doğru kullanım: Bir ReactNode döndürüyor
  return (
    <div>
      {" "}
      <SignUp />
    </div>
  );
};

export default SignUpPage;
