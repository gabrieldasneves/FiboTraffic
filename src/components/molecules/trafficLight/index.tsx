import { useState } from "react";
import "./styles.css";
import { Light } from "../../atoms/Light";

type TrafficLightStateType = "stopped" | "calculating" | "complete";

export function TrafficLight() {
  const [state, setState] = useState<TrafficLightStateType>("stopped");

  return (
    <>
      <div className="container">
        <div className="trafficLight">
          <Light
            color="red"
            isActive={state === "stopped"}
            onClick={() => setState("stopped")}
          />

          <Light
            color="yellow"
            isActive={state === "calculating"}
            onClick={() => setState("calculating")}
          />

          <Light
            color="green"
            isActive={state === "complete"}
            onClick={() => setState("complete")}
          >
            <span className="light-number">3</span>
          </Light>
        </div>
      </div>
    </>
  );
}
