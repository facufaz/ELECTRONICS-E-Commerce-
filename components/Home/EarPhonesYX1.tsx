import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const HeadphonesYX1 = () => {
  return (
    <Container sx={{ display: "flex", gap: "1rem", marginBottom: "3rem" }}>
      <Box
        sx={{
          backgroundImage: "url(/assets/home/desktop/image-earphones-yx1.jpg)",
          backgroundSize: "cover",
          width: "50%",
          height: 300,
        }}
      />
      <Box
        sx={{
          backgroundColor: "#f1f1f1",
          width: "35rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
          paddingLeft: "6rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            fontWeight: 800,
            marginBottom: "2rem",
          }}
        >
          YX1 EarPhones
        </Typography>

        <Button sx={{ minWidth: 162 }} variant="outlined" color="black">
          <Link href="/1">see product</Link>
        </Button>
      </Box>
    </Container>
  );
};

export default HeadphonesYX1;
