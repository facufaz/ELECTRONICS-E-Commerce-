import React from "react";
import { Box, Typography } from "@mui/material";
import { Button } from "./Button";
import Link from "next/link";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "75vh",
        justifyContent: "center",
        width: "25vw",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          textTransform: "uppercase",
          color: "#4f4f4f",
          fontSize: "1.5rem",
          letterSpacing: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        New Product
      </Typography>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontWeight: 500,
          fontSize: "4.5rem",
          marginBottom: "2rem",
        }}
      >
        XX99 Mark II Headphones
      </Typography>
      <Typography
        variant="body1"
        sx={{
          letterSpacing: 1,
          color: "#727272",
          fontSize: "1.25rem",
          marginBottom: "3rem",
          fontWeight: "800",
        }}
      >
        Experience natural, lifelike audio and exceptional build quality made
        for the passionate music enthusiast.
      </Typography>
      <Button color="#e47c52" variant="contained" sx={undefined}>
        <Link href="/xx99-mark-one-headphones">See Product</Link>
      </Button>
    </Box>
  );
};

export default Hero;
