import * as React from "react";
import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
            <MenuItem component={Link} to={'/product'}>Products</MenuItem>
            <MenuItem component={Link} to={'/dashboard'}>Dashboard</MenuItem>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            eCommerce Shop
          </Typography>
          <Link to="/login">Login</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Navbar;
