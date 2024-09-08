import "./App.css";
import { Header } from "./components/molecules/header";
import { TrafficLightGroup } from "./components/organisms/trafficLightGroup";

function App() {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="body">
        <TrafficLightGroup />
      </div>
    </>
  );
}

export default App;
