import React from "react";
import balloonImg from "../assets/ballon.png";
import burstImg from "../assets/ballonburst.png";

interface BalloonProps {
  size: number;
  phase: "idle" | "inflating" | "floating" | "burst";
  onBurst: () => void;
  position: { top: number; left: number };
}

const Balloon: React.FC<BalloonProps> = ({
  size,
  phase,
  onBurst,
  position,
}) => {
  const imageToShow = phase === "burst" ? burstImg : balloonImg;

  if (phase === "burst") {
    return (
      <div
        style={{
          position: "absolute",
          top: `${position.top}px`,
          left: `${position.left}px`,
          fontSize: "24px",
          fontWeight: "bold",
          color: "red",
        }}
      >
        POPPED! 💥
      </div>
    );
  }

  return (
    <img
      src={imageToShow}
      alt="Balloon"
      onClick={() => {
        if (phase === "floating") {
          onBurst();
        }
      }}
      style={{
        width: `${size}px`,
        height: "auto",
        position: "absolute",
        top: `${position.top}px`,
        left: `${position.left}px`,
        transition: "top 0.5s ease, left 0.5s ease, width 0.3s ease",
        cursor: phase === "floating" ? "pointer" : "default",
      }}
    />
  );
};

export default Balloon;
