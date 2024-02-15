import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Button } from "../Button";
import Link from "next/link";

const SpeakerZX7 = () => {
  return (
    <Container>
      <Box
        sx={{
          backgroundImage: "url(/assets/home/desktop/image-speaker-zx7.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "20rem",
          marginBottom: "3rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Box sx={{ marginLeft: "3rem" }}>
          <Typography
            sx={{
              fontWeight: 800,
              textTransform: "uppercase",
              marginBottom: "2rem",
            }}
            variant="h2"
          >
            ZX7 Speaker
          </Typography>
          <Button sx={{ minWidth: 162 }} variant="outlined" color="black">
            <Link href="/5">see product</Link>
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SpeakerZX7;
