import "./App.css";
import { useState } from "react";
import NavBar from "./components/navbar";
import CardContainer from "./CardContainer";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="App">
      <NavBar setState={setState} />
      {state && <CardContainer setState={setState} />}
    </div>
  );
}

export default App;
