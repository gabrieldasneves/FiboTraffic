import "./styles.css";
import { TrafficLight } from "../../molecules/trafficLight";

export function TrafficLightGroup() {
  return (
    <div className="groupContainer">
      <TrafficLight startingPoint={0} />
      <TrafficLight startingPoint={10} />
      <TrafficLight startingPoint={20} />
      <TrafficLight startingPoint={30} />
    </div>
  );
}
