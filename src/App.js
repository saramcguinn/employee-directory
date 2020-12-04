import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import DataArea from "./components/DataArea"

function App() {
  return (
    <div className="App">
      <Header />
      <DataArea />
    </div>
  );
}

export default App;
