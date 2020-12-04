import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import DataTable from "./components/DataTable"

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <DataTable />
    </div>
  );
}

export default App;
