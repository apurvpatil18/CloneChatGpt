import React from "react";
import { Box, Link, Typography, useTheme } from "@mui/material";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("logout successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"110%%"}
      p="1rem 6%"
      border-radius="8px"
      padding="20px"
      margin-bottom="20px"
      textAlign={"center"}
      position="sticky"
      sx={{
        boxShadow: 3,
        mb: 2,
        backgroundColor: "grey",
        fontWeight: "inherit",
        position: "sticky",
      }}
    >
      <Typography
        variant="h1"
        color="#FFFFFF"
        fontWeight="600"
        line-height="2.5rem"
        gap="0.5rem"
      >
        ChatGPT
      </Typography>
      {loggedIn ? (
        <>
          <Link href="/home" p={1} color="#FFFFFF" fontWeight="inherit">
            Home
          </Link>
          <Link
            href="/login"
            onClick={handleLogout}
            p={1}
            color="#FFFFFF"
            fontWeight="bold"
          >
            Logout
          </Link>
        </>
      ) : (
        <>
          <NavLink
            to="/register"
            p={1}
            fontWeight="inherit"
            font-family="Arial"
            sans-serif
          >
            Sign Up
          </NavLink>
          <NavLink to="/login" p={1} fontWeight="inherit">
            Sign In
          </NavLink>
        </>
      )}
    </Box>
  );
};

export default Navbar;
