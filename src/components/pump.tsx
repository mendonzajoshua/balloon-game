import React from "react";
import pumpImg from "../assets/pump.png"; // make sure this path is correct

interface PumpProps {
  onPump: () => void;
}

const Pump: React.FC<PumpProps> = ({ onPump }) => {
  return (
    <button
      onClick={onPump}
      style={{
        padding: "12px",
        marginTop: "20px",
        cursor: "pointer",
        border: "none",
        background: "transparent",
      }}
    >
      <img
        src={pumpImg}
        alt="Air Pump"
        style={{ width: "80px", height: "auto" }}
      />
    </button>
  );
};

export default Pump;
