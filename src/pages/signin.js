import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import { Paper, TextField } from "@mui/material";

const Signin = () => {
  return (
        <Paper className="mt-[5%] flex flex-col justify-center   items-center ">
        <TextField
        variant="standard"
          required
          // className="max-w-[320px]"
          label="Enter your email or username"
        />
        <TextField
        variant="standard"
          required
          className="max-w-[320px]"
          type="password"
          label="password"
        />
           
        </Paper>
     
  );
};

export default Signin;
