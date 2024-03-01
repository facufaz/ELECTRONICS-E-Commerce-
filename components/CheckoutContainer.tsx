import { Container, Typography, Box, TextField } from "@mui/material";
import React from "react";

const CheckoutContainer = () => {
  return (
    <Box sx={{ backgroundColor: "white", padding: "5rem", width: "70%" }}>
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: 1.5,
        }}
      >
        Checkout
      </Typography>
      <Typography
        variant="h2"
        sx={{
          marginTop: "3rem",
          color: "#d87d4a",
          textTransform: "uppercase",
          fontSize: "1.3rem",
          fontWeight: 500,
        }}
      >
        Billing Details
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={{ margin: " 1rem 5px 5px 0", width: "48%" }}
            id="name"
            label="Name"
            placeholder="Facundo Fazzito"
            variant="outlined"
          />
          <TextField
            sx={{ margin: "1rem 5px 5px 1rem", width: "48%" }}
            id="email"
            label="Email"
            placeholder="facufazzito@gmail.com"
            variant="outlined"
          />
        </Box>
        <TextField
          sx={{ margin: " 1rem 5px 5px 0", width: "48%" }}
          id="phone"
          label="Phone Number"
          placeholder="+1 202-555-275"
          variant="outlined"
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          marginTop: "3rem",
          color: "#d87d4a",
          textTransform: "uppercase",
          fontSize: "1.3rem",
          fontWeight: 500,
        }}
      >
        shipping info
      </Typography>
      <Box sx={{ marginTop: 1 }}>
        <TextField
          sx={{ marginTop: "1rem", width: "100%" }}
          id="adress"
          label="Adress"
          placeholder="Corrientes 1910"
          variant="outlined"
        />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            sx={{ marginTop: " 1rem", width: "48%" }}
            id="zip Code"
            label="Zip Code"
            placeholder="10916"
            variant="outlined"
          />

          <TextField
            sx={{ marginTop: " 1rem", width: "48%" }}
            id="city"
            label="City"
            placeholder="Buenos Aires"
            variant="outlined"
          />
        </Box>
        <TextField
          sx={{ marginTop: " 1rem", width: "48%" }}
          id="country"
          label="Country"
          placeholder="Argentina"
          variant="outlined"
        />
      </Box>
      <Typography
        variant="h2"
        sx={{
          marginTop: "3rem",
          color: "#d87d4a",
          textTransform: "uppercase",
          fontSize: "1.3rem",
          fontWeight: 500,
        }}
      >
        Payment Method
      </Typography>
    </Box>
  );
};
export default CheckoutContainer;
