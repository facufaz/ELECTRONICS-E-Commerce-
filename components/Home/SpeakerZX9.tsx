import { Container, Box, Typography } from "@mui/material";
import { Button } from "../Button";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SpeakerZX9 = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: "url(./assets/home/desktop/pattern-circles.svg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#d87d4a",
          backgroundPositionX: "-150px",
          color: "white",
          display: "flex",
          alignItems: "center",
          marginBottom: "3rem",
        }}
      >
        <Box>
          <Image
            src="/assets/home/desktop/image-speaker-zx9.png"
            alt="speaker"
            width={400}
            height={500}
            style={{ margin: "7rem 8rem 0 8rem" }}
          />
        </Box>

        <Box sx={{ marginRight: "10rem" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              marginBottom: "2rem",
              textTransform: "uppercase",
              fontSize: "4.5rem",
            }}
          >
            ZX9 Speaker
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: "1.25rem",
              marginBottom: "3rem",
            }}
          >
            upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound
          </Typography>
          <Button variant="contained" color="black">
            <Link href="/6">see product</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SpeakerZX9;
