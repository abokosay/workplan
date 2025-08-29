import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Rawskinx from "./pages/Rawskinx";
import SupremePlots from "./pages/SupremePlots";
import AdsZone from "./pages/AdsZone";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-slate-900 text-white min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rawskinx" element={<Rawskinx />} />
          <Route path="/supreme-plots" element={<SupremePlots />} />
          <Route path="/ads-zone" element={<AdsZone />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
