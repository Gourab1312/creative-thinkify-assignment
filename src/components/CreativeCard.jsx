import React from "react";
import "../styles/CreativeCard.css";

const CreativeCard = ({ data }) => {
  const { title, subtitle, color } = data;
  return (
    <div style={{ backgroundColor: color }} className="creative-card">
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
};

export default CreativeCard;
