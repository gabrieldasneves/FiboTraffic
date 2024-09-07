import { useEffect, useState } from "react";
import "./styles.css";
import { Light } from "../../atoms/Light";
import { useFibonacci } from "../../../modules/hooks/useFibinacci";

type TrafficLightStateType = "stopped" | "calculating" | "complete";

export function TrafficLight() {
  const [state, setState] = useState<TrafficLightStateType>("stopped");
  const { result, isCalculating, fibonacciCalculation } = useFibonacci();

  useEffect(() => {
    if (state === "stopped" && isCalculating) {
      setTimeout(() => {
        setState("calculating");
      }, 1500);
    }
  }, [isCalculating, state]);

  console.log(state);

  useEffect(() => {
    fibonacciCalculation(10);
  }, [fibonacciCalculation]);

  useEffect(() => {
    if (state === "calculating" && !isCalculating) {
      setTimeout(() => {
        setState("complete");
      }, 1500);
    }
  }, [isCalculating, state]);

  useEffect(() => {
    if (state === "complete") {
      setTimeout(() => {
        setState("stopped");
      }, 1500);
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
    </>
  );
}
