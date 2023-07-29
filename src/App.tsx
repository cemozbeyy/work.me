import "../src/App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import { ClerkProvider } from "@clerk/clerk-react";
import DashBoard from "./components/dashboard/Dashboard";
import SignInPage from "./components/auth/SignIn";
import SignUpPage from "./components/auth/SignUp";

function App() {
  const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY!;

  return (
    <BrowserRouter>
      <ClerkProvider publishableKey={clerkPubKey}>
        <div className="App">
          <header className="App-header">
            <Header />
          </header>
          <Routes>
            <Route path="/sign-in/*" element={<SignInPage />} />

            <Route path="/sign-up/*" element={<SignUpPage />} />
            <Route path="/" element={<DashBoard />} />
          </Routes>
          <footer className="footer">
            <Footer />
          </footer>
        </div>
      </ClerkProvider>
    </BrowserRouter>
  );
}

export default App;
