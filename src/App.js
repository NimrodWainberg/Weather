import React from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import Home from "./components/home/home";
import Favorites from "./components/favorites/favorites";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
