import "./App.css";
import React from "react";

function App() {
  const [source, setSource] = React.useState("Arjun");

  const handleClick = () => {
    if (source === "Arjun") {
      setSource("Arun");
    } else if (source === "Arun") {
      setSource("Ashok");
    } else if (source === "Ashok"){
      setSource("Rita");
    }else {
      setSource('Arjun')
    }
  };

  return (
    <div className="App">
      <i style={{ fontWeight: "bold", fontSize: "4rem" }}> {source}</i>
      <br />
      <br />
      <button onClick={handleClick}>Update</button>
    </div>
  );
}

export default App;
