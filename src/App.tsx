import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/style/global.scss";

import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Grafiek from "./Pages/Grafiek";
import WaterTesten from "./Pages/WaterTesten";
import Settings from "./Pages/Settings";

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <BrowserRouter>
      <div className="content">
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="settings" element={<Settings />} />
            <Route path="watertesten" element={<WaterTesten />} />
            <Route path="grafiek" element={<Grafiek />} />
          </Route>
        </Routes>
      </div>
      <Nav />
    </BrowserRouter>
  );
};

export default App;
