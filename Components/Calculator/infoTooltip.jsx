import React from 'react';
import { CiCircleInfo } from "react-icons/ci";

const InfoTooltip = ({ title, description }) => {
  return (
    <div className="infoIconWrapper">
      <CiCircleInfo
        style={{ width: "18px", height: "18px" }}
        className="infoIcon"
      />
      <div className="tooltipBox">
        <h4 className="heading28 fw-bold">{title}</h4>
        <p className="sub18">{description}</p>
      </div>
    </div>
  );
};

export default InfoTooltip;