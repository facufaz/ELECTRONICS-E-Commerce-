import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <Container sx={{ display: "flex", marginTop: "10rem" }}>
      <Box
        sx={{
          marginLeft: "3rem",
          marginRight: "8rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textTransform: "uppercase",
            fontSize: "3rem",
            marginBottom: "4rem",
          }}
        >
          BRINGING YOU THE <span style={{ color: "#d87d4a" }}>BEST</span> AUDIO
          GEAR
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "1rem", color: "#8d8d8d", marginBottom: "3rem" }}
        >
          Located in the heart of New York City, Audiophile is the premiere
          destination for high end headphones, earphones, speakers, and audio
          accessories. We have a large showroom with luxury demonstration rooms
          available for you to browse and experience a wide range of our
          products. Stop by our store to meet some of the fantastic people who
          make Audiophile the best place to buy your portable audio equipment.
        </Typography>
      </Box>
      <Image
        src="/assets/shared/desktop/image-best-gear.jpg"
        width={450}
        height={500}
        alt="image-best-gear"
      />
    </Container>
  );
};

export default About;
