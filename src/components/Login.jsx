import {
  Avatar,
  Box,
  Container,
  FormControlLabel,
  Paper,
  TextField,
  Typography,
  Checkbox,
  Button,
  Grid,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import {  useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Login = () => {
 

    const navigate = useNavigate();
     const [inputValue, setInputValue] = useState({
       email: "",
       password: "",
       username:"",
     });
     const { email, password  } = inputValue;


     const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://stocker-backend.vercel.app/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message ,user:username } = data;
      if (success) {
         localStorage.setItem("username", username); 
     
console.log("Saved to localStorage:", username);
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
        
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });




  }





  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            placeholder="Enter email"
            fullWidth
            required
            autoFocus
            sx={{ mb: 2 }}
            htmlFor="email"
            type="email"
            name="email"
            value={email}
             onChange={handleOnChange}
          />
          <TextField
          htmlFor="password"
            placeholder="Enter password"
            fullWidth
            required
            type="password"
            name="password"
            value={password}
             onChange={handleOnChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 1 }}>
            Log In
          </Button>
        </Box>
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid item>
            <Link component={RouterLink} to="/forgot">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/signup">
              Sign Up
            </Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;