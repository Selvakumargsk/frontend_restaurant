import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import Logo from "../../images/logo.png";

import MenuIcon from "@mui/icons-material/Menu";
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import { deleteAdmin, deleteCookies, getAdminId, getUserId } from "../../services/sessionProvider";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

const handleSignout = ()=>{
  deleteCookies();
  navigate('/');
}
  
const handleAdmin = () =>{
  deleteAdmin();
  navigate('/'); 
}

  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"goldenrod"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={"70"} width="200" />
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        {getAdminId() && <li>
                  <NavLink to={"/bookingDetails"}>bookingDetails</NavLink>
                </li>}
                {getUserId() ?<li>
                   <Button 
                  className="mt-2"
                variant="contained"
                color="warning" onClick={handleSignout}>Signout</Button>  </li> :null}
              
              {getAdminId() ?  <li>
                <Button variant="contained"
                color="warning" onClick={handleAdmin}>Admin Signout</Button>   </li> : null}
             
                <li>
                  {!getUserId()&& !getAdminId() && <NavLink to={"/signin"}>Signin</NavLink>}
                </li>
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={"70"} width="250" />
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
               {getAdminId() && <li>
                  <NavLink to={"/bookingDetails"}>bookingDetails</NavLink>
                </li>}
                {getUserId() ?<li>
                   <Button 
                  className="mt-2"
                variant="contained"
                color="warning" onClick={handleSignout}>Signout</Button>  </li> :null}
              
              {getAdminId() ?  <li>
                <Button variant="contained"
                color="warning" onClick={handleAdmin}>Admin Signout</Button>   </li> : null}
             
                <li>
                  {!getUserId()&& !getAdminId() && <NavLink to={"/signin"}>Signin</NavLink>}
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;
