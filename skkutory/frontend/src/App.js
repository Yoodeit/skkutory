import "./App.css";
import RestAPI from "./restapi.js";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RestAPI />
      </header>
    </div>
  );
}

export default App;