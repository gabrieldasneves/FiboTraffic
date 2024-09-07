import { useEffect, useState } from "react";
import "./styles.css";
import { Light } from "../../atoms/Light";
import { useFibonacci } from "../../../modules/hooks/useFibinacci";

type TrafficLightStateType = "stopped" | "calculating" | "complete";

export function TrafficLight() {
  const [state, setState] = useState<TrafficLightStateType>("stopped");
  const { result, isCalculating, fibonacciCalculation } = useFibonacci();

  const stratFiboCalculation = (n: number) => {
    console.log("clicou");
    setState("calculating");
    fibonacciCalculation(n);
  };

  useEffect(() => {
    if (!isCalculating && state === "calculating") {
      setState("complete");
    }
  }, [isCalculating, state]);

  return (
    <>
      <div className="container">
        <div className="trafficLight">
          <Light color="red" isActive={state === "stopped"} />

          <Light color="yellow" isActive={state === "calculating"} />

          <Light color="green" isActive={state === "complete"}>
            {state === "complete" && (
              <span className="light-number">{result}</span>
            )}
          </Light>
        </div>
      </div>
      <button onClick={() => stratFiboCalculation(10)}>
        Start Calculation
      </button>
    </>
  );
}
