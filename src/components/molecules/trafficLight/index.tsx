import { useEffect, useState } from "react";
import "./styles.css";
import { Light } from "../../atoms/light";
import { useFibonacci } from "../../../modules/hooks/useFibinacci";

type TrafficLightProps = {
  startingPoint: number;
};

type TrafficLightStateType = "stopped" | "calculating" | "complete";

export function TrafficLight({ startingPoint }: TrafficLightProps) {
  const [state, setState] = useState<TrafficLightStateType>("stopped");
  const { result, isCalculating, fibonacciCalculation } = useFibonacci();
  const [counter, setCounter] = useState<number>(startingPoint);

  const handleStateTransition = () => {
    if (counter > startingPoint + 10) {
      if (state === "stopped") {
        setState("calculating");
      } else if (state === "calculating") {
        setState("complete");
      } else if (state === "complete") {
        setState("stopped");
      }
      setCounter(startingPoint);
    }
  };

  useEffect(() => {
    if (counter <= startingPoint + 10 && !isCalculating) {
      const timer = setTimeout(() => {
        fibonacciCalculation(counter);
        setCounter((prevCounter) => prevCounter + 1);
      }, 500);

      return () => clearTimeout(timer);
    } else {
      handleStateTransition();
    }
  }, [counter, fibonacciCalculation]);

  return (
    <>
      <div className="container">
        <div className="trafficLight">
          <Light color="red" isActive={state === "stopped"} />
          <Light color="yellow" isActive={state === "calculating"} />
          <Light color="green" isActive={state === "complete"}>
            <span className="light-number">{result}</span>
          </Light>
        </div>
      </div>
    </>
  );
}
