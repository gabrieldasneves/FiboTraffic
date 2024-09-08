import "./App.css";
import { Header } from "./components/molecules/header";
import { TrafficLightGroup } from "./components/organisms/trafficLightGroup";

function App() {
  return (
    <>
      <Header />
      <div className="body">
        <TrafficLightGroup />
      </div>
    </>
  );
}

export default App;
