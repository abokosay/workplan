import React from "react";

function CardGallery({ cards }) {
  return (
    <div className="card-gallery">
      <div className="side-card">{cards.left}</div>
      <div className="main-card">{cards.main}</div>
      <div className="side-card">{cards.right}</div>
    </div>
  );
}

export default CardGallery;
