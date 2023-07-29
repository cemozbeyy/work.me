import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => (
  <SignIn
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

export default SignInPage;
