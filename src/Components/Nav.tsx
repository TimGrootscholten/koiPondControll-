import React, { useState, useEffect } from "react";
import { Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import {
  AccountCircle,
  Timeline,
  Home,
  Settings,
  LocalFireDepartmentSharp,
} from "@mui/icons-material";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";

const Nav = () => {
  const [value, setValue] = useState(0);

  let { pathname } = useLocation();

  useEffect(() => {
    let paths = pathname.split("/");
    switch (paths[1]) {
      case "":
        setValue(0);
        break;
      case "2":
        setValue(1);
        break;
      case "login":
        setValue(2);
        break;
      case "registreren":
        setValue(2);
        break;
      case "settings":
        setValue(3);
        break;
    }
  }, [pathname]);

  return (
    <nav className="nav">
      <Box className="w-100">
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction component={Link} to="/" label="Home" icon={<Home />} />
          <BottomNavigationAction
            component={Link}
            to="/grafiek"
            label="Grafiek"
            icon={<Timeline />}
          />
          <BottomNavigationAction
            component={Link}
            to="/verwarming"
            label="Verwarming"
            icon={<LocalFireDepartmentSharp />}
          />
          <BottomNavigationAction
            component={Link}
            to="/login"
            label="Login"
            icon={<AccountCircle />}
          />
          <BottomNavigationAction
            component={Link}
            to="/settings"
            label="Instellingen"
            icon={<Settings />}
          />
        </BottomNavigation>
      </Box>
    </nav>
  );
};

export default Nav;
