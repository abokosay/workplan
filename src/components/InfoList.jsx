import React from "react";

function InfoList({ info }) {
  return (
    <ul className="info-list">
      {info.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}

export default InfoList;
