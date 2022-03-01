import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Box from "@mui/material/Box";
import Nav from "./Components/Nav";

const App = () => {
  const [userData, setUserData] = useState({});
  return (
    <Box
      className="app d-flex flex-column h-100"
      sx={{
        minHeight: "100vh",
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/"></Route>
        </Routes>
        <Nav />
      </BrowserRouter>
    </Box>
  );
};

export default App;
