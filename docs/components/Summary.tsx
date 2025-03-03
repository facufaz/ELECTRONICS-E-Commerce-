import { Box, Typography } from "@mui/material";

import React from "react";
import { Button } from "./Button";

const Summary = () => {
  return (
    <Box
      sx={{
        backgroundColor: "white",
        margin: "0 5rem 5rem 2rem",
        padding: "3rem",
        width: "40%",
        height: "50vh",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textTransform: "uppercase",
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: 1.5,
        }}
      >
        Summary
      </Typography>
      <Box>
        <Typography
          sx={{ display: "flex", justifyContent: "center", paddingTop: "3rem" }}
        >
          No Items
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "2rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#808080",
            fontWeight: 600,
          }}
        >
          Total
        </Typography>
        <Typography>$0.00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#808080",
            fontWeight: 600,
          }}
        >
          Shipping
        </Typography>
        <Typography>$19.95</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "1rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "#808080",
            fontWeight: 600,
          }}
        >
          tax
        </Typography>
        <Typography>$0.00</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "3rem",
        }}
      >
        <Typography
          sx={{
            textTransform: "uppercase",
            color: "black",
            fontWeight: 600,
          }}
        >
          Grand Total
        </Typography>
        <Typography sx={{ color: "#e47c52" }}>$19.95</Typography>
      </Box>

      <Button
        variant="contained"
        color="#e47c52"
        sx={{ width: "100%", marginTop: "2rem" }}
      >
        continue and pay
      </Button>
    </Box>
  );
};

export default Summary;
