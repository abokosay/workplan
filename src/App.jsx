import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ApplicationsSystemCore from "./pages/ApplicationsSystemCore";
import MakeStories from "./pages/MakeStories";
import GoogleAds from "./pages/GoogleAds";
import KitchenInstallation from "./pages/KitchenInstallation";
import TurkeyLanguage from "./pages/TurkeyLanguage";
import "./styles/main.css";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-indigo-900 text-white min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/applications-system-core"
            element={<ApplicationsSystemCore />}
          />
          <Route path="/make-stories" element={<MakeStories />} />
          <Route path="/google-ads" element={<GoogleAds />} />
          <Route
            path="/kitchen-installation"
            element={<KitchenInstallation />}
          />
          <Route path="/turkey-language" element={<TurkeyLanguage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
