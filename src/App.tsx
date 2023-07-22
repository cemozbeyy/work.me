import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Header from "./components/common/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          {/* Diğer sayfaları burada Route componentleriyle ekleyin */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
