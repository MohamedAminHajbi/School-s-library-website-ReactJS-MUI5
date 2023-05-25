import React, { useState } from 'react';
import { TextField, Button, Container, Typography, InputLabel , Select , MenuItem, } from '@mui/material';

import axios from 'axios';

const Register = () => {
  
  const [id, setId] = useState();
  const [username, setUsername] = useState();
  const [type, setType] = useState();
  const [email, setEmail] = useState();
  const [adress, setAdress] = useState();
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();


const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8080/api/v1/saveUser', {
    id: id,
    username: username,
    type: type,
    email: email,
    mobile: mobile,
    adress: adress,
    password: password}
    ); 
    setId("");
    setUsername("");
    setType("");
    setEmail("");
    setAdress("");
    setMobile("");
    setPassword("");
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div>
      <Container maxWidth="xs" sx={{paddingTop:"80px"}} >
      <div>
        <Typography variant="h4" align="center"sx={{
    fontWeight:"bold",}}>
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="username"
            label="Username"
            id="username"
            value={username}
            onChange={(event)=>{
              setUsername(event.target.value);
            }}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={email}
            onChange={(event)=>{
              setEmail(event.target.value);
            }}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="adress"
            label="Adress"
            type="text"
            id="adress"
            value={adress}
            onChange={(event)=>{
              setAdress(event.target.value);
            }}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="mobile"
            label="Mobile"
            type="mobile"
            id="mobile"
            value={mobile}
            onChange={(event)=>{
              setMobile(event.target.value);
            }}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={password}
            onChange={(event)=>{
              setPassword(event.target.value);
            }}
            required
          />
          <InputLabel id="user-type-label">User Type</InputLabel>
          <Select
      value={type} label="Type" fullWidth
      onChange={(event)=>{
        setType(event.target.value);
      }}
      
      
    >
      <MenuItem value="" disabled>
        Choose User Type
      </MenuItem>
      <MenuItem value="professor">Professor</MenuItem>
      <MenuItem value="student">Student</MenuItem>
    </Select>
          <Button onClick={handleSubmit} type="submit" fullWidth variant="contained" sx={{fontWeight:"bold",backgroundColor:"#0F1B4C","&:hover":{backgroundColor:"#fff",color:"#0F1B4C"}}}>
            Register
          </Button>
        </form>
      </div>
      </Container>
    </div> 
  )
}

export default Register