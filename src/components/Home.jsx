import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";
import sketch from '../media/sketch.png'

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Home = () => {
  
    const CustomBox = styled(Box)(({ theme }) => ({
      display: "flex",
      justifyContent:"center",
      gap: theme.spacing(5),
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
      [theme.breakpoints.down("sm")]:{
        felxDirection: "column",
        alignItems: "center",
        textAlign: "center"
      }
    }));
  
    const Title = styled(Typography)(({ theme }) => ({
      fontSize: "64px",
      color:"#000336",
      fontWeight:"bold",
      margin: theme.spacing(4,0,4,0),
      [theme.breakpoints.down("sm")]:{
        fontSize: "40px"
      }
    }));
  
    return <Box sx={{backgroundColor:"#E6F0FF", minHeight: "80vh"}}>
      <Container>
        <CustomBox>
          <Box sx={{flex:"1"}}>
            <Typography variant="body2" sx={{fontSize: "18px", color:"#687690", fontWeight: "500", mt: 10,mb: 4}}>
              Welcome to our school's library!
            </Typography>
            <Title variant="h1" sx={{fontSize:"50px" , width:"600px"}}>
            Our library is a hub for learning, research, and exploration.
            </Title>
            <Typography variant="h1" sx={{fontSize:"18px", color:"#5A6473", my:4}}>
            We offer a vast collection of books and online resources to help you achieve your academic and personal goals.
            </Typography>
            <CustomButton backgroundColor="#0F184C" color="#fff" buttonText="More About Us" heroBtn={true} width="93px" />
          </Box>
          <Box>
            <img src={sketch} alt="" />
          </Box>
        </CustomBox>
  
      </Container>
    </Box>;
  
}

export default Home