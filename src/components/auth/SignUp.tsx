import { SignUp } from "@clerk/clerk-react";

const SignUpPage = () => (
  <SignUp
    appearance={{
      elements: {
        rootBox: {
          fontSize: 24,
          display: "grid",
          width: "100%",
          placeItems: "center",
          marginTop: "7vh",
        },
      },
    }}
  />
);

export default SignUpPage;
