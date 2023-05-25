import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import logoImg from "../media/mybib.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const NavLink = styled(Link)(({ theme }) => ({
    fontSize: "14px",
    textDecoration:"none",
    fontFamily:"Roboto",
    color:"#4F5361",
    fontWeight:"bold",
    cursor:"pointer",
    "&:hover":{
      color:"#0F1B4C"
    }
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
    gap:theme.spacing(3),
    [theme.breakpoints.down("md")]:{
      display:"none"
    }
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor:"pointer",
    display:"none",
    marginRight:theme.spacing(2),
    [theme.breakpoints.down("md")]:{
      display:"block"
    }
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    position:"fixed",
    display:"flex",
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"space-between",
    height:"60px",
    padding:theme.spacing(5),
    [theme.breakpoints.down("md")]:{
      padding:theme.spacing(2)
    },
    zIndex: 999
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor:"pointer",
    width:"90px",
    [theme.breakpoints.down("md")]:{
      display:"none"
    }
  }));

  return <NavbarContainer>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"2.5rem"}}>
      <Box sx={{display:"flex",alignItems:"center"}}>
        <CustomMenuIcon/>
        <NavbarLogo src={logoImg} alt="logo"/>
      </Box>
      <NavbarLinksBox>
        <NavLink variant="body2" to="/">Home</NavLink>
        <NavLink variant="body2">Catalog</NavLink>
        <NavLink variant="body2">Profile</NavLink>
        <NavLink variant="body2">Listed</NavLink>
        <NavLink variant="body2">Contact</NavLink>
      </NavbarLinksBox>
    </Box>
    <Box sx={{display:"flex",alignItems:"center",justifyContent:"center",gap:"1rem"}}>
      <NavLink variant="body2" to="/login">Sign Up</NavLink>
      <CustomButton backgroundColor="#0F1B4C" color="#fff" buttonText="Register"/>
    </Box>
  </NavbarContainer>;
};

export default Navbar;
