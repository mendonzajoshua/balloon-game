import { useEffect, useState } from "react";
import backgroundImg from "./assets/backgroundimg.png"; // or "../assets" depending on file
import Balloon from "./components/ballon";
import Pump from "./components/pump";

type Phase = "idle" | "inflating" | "floating" | "burst";

export default function App() {
  const [size, setSize] = useState(0);
  const [phase, setPhase] = useState<Phase>("idle");
  const [position, setPosition] = useState({ top: 60, left: 300 });

  const handlePump = () => {
    if (phase === "burst") return;

    const newSize = size + 20;
    setSize(newSize);
    setPhase(newSize >= 100 ? "floating" : "inflating");
  };

  const handleBurst = () => {
    if (phase === "floating") {
      setPhase("burst");
    }
  };

  const handleReset = () => {
    setSize(0);
    setPhase("idle");
    setPosition({ top: 60, left: 300 });
  };

  // Random floating movement
  useEffect(() => {
    if (phase !== "floating") return;

    const interval = setInterval(() => {
      setPosition({
        top: Math.random() * 300 + 50,
        left: Math.random() * 300 + 50,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [phase]);

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          className="balloon-area"
          style={{ position: "relative", height: "500px" }}
        >
          <Balloon
            size={size}
            phase={phase}
            position={position}
            onBurst={handleBurst}
          />
        </div>
        <Pump onPump={handlePump} />
        <button onClick={handleReset} style={{ alignContent: "center" }}>
          Reset
        </button>
      </div>
      <div className="App">
        <div
          className="balloon-area"
          style={{ position: "relative", height: "500px" }}
        >
          <Balloon
            size={size}
            phase={phase}
            position={position}
            onBurst={handleBurst}
          />
        </div>
        <Pump onPump={handlePump} />
        <button
          onClick={handleReset}
          style={{ marginTop: "20px", padding: "10px 20px" }}
        >
          Reset
        </button>
      </div>
    </>
  );
}
