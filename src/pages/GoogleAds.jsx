import React from "react";
import MindMap from "../components/MindMap";

const mindMapData = {
  title: "Google Ads",
  children: [
    { title: "Campaigns" },
    { title: "Ad Groups" },
    { title: "Keywords" },
    { title: "Ad Copy" },
    { title: "Bidding" },
  ],
};

function GoogleAds() {
  return (
    <div className="text-white text-center">
      <h1 className="text-5xl font-bold mb-12">Google Ads</h1>
      <MindMap data={mindMapData} />
    </div>
  );
}

export default GoogleAds;
