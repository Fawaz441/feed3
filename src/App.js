import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./sass/index.scss";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Terms from "./pages/Terms";
import Policy from "./pages/Policy";
import Footer from "./components/Footer";
import TokenomicsPage from "./pages/Tokenomics";
import { ProjectContextWrapper } from "./context/ProjectContext";
import BuyPage from "./pages/BuyPage";

function App() {
  return (
    <div className="app-container">
      <ProjectContextWrapper>
        <Router>
          <ScrollToTop />
          {/* <Timer/> */}
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/tokenomics" element={<TokenomicsPage />} />
            <Route path="/buy" element={<BuyPage />} />
            <Route path="/buy/options" element={<BuyPage />} />
          </Routes>
          <Footer />
        </Router>
      </ProjectContextWrapper>
    </div>
  );
}

export default App;
