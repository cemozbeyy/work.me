import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignInPage from "./pages/SignInPage";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

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
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
