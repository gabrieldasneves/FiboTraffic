import { useState } from "react";
import "./styles.css";

type TrafficLightStateType = "stopped" | "calculating" | "complete";

export function TrafficLight() {
  const [state, setState] = useState<TrafficLightStateType>("stopped");

  const handleClick = (newState: TrafficLightStateType) => {
    setState(newState);
  };

  return (
    <>
      <div className="container">
        <div className="trafficLight">
          <div
            className={`label red ${state === "stopped" ? "activeRed" : ""}`}
            onClick={() => handleClick("stopped")}
          ></div>
          <div
            className={`label yellow ${
              state === "calculating" ? "activeYellow" : ""
            }`}
            onClick={() => handleClick("calculating")}
          ></div>

          <div
            className={`label green ${
              state === "complete" ? "activeGreen" : ""
            }`}
            onClick={() => handleClick("complete")}
          >
            <span className="light-number">3</span>
          </div>
        </div>
      </div>
    </>
  );
}
