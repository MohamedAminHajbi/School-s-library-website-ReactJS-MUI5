import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // perform authentication logic here
  };

  return (
    <div>
      <Container maxWidth="xs" sx={{marginTop:"60px"}} >
      <div>
        <Typography variant="h4" align="center"sx={{
    fontWeight:"bold",}}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Button type="submit" fullWidth variant="contained" sx={{fontWeight:"bold",backgroundColor:"#0F1B4C","&:hover":{backgroundColor:"#fff",color:"#0F1B4C"}}}>
            Log In
          </Button>
        </form>
      </div>
      </Container>
    </div>
    
  );
}

export default Login;
