import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#191919" }}>
      <Container sx={{ marginTop: "10rem" }}>
        <Box
          sx={{
            backgroundColor: "#d87d4a",
            width: "6rem",
            height: "0.25rem",
            marginRight: 10,
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "1rem",
          }}
        >
          <Link href="/">
            <Image
              src="../assets/shared/logo.svg"
              alt="Logo"
              width={140}
              height={25}
            />
          </Link>

          <ul
            style={{
              color: "white",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "0",
            }}
          >
            <Link style={{ marginRight: "2rem", fontWeight: 700 }} href="/">
              Home
            </Link>
            <Link
              style={{ marginRight: "2rem", fontWeight: 700 }}
              href="/headphones"
            >
              Headphones
            </Link>
            <Link style={{ marginRight: "2rem", fontWeight: 700 }} href="/speakers">
              Speakers
            </Link>
            <Link style={{ fontWeight: 700 }} href="/earphones">
              Earphones
            </Link>
          </ul>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1rem",
            alignItems: "flex-end",
            marginBottom: "4rem",
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: "#8d8d8d", maxWidth: "30rem" }}
          >
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </Typography>
          <Box sx={{ display: "flex", gap: "1rem", marginRight: "1rem" }}>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="Facebook"
                width={35}
                height={35}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="Instagram"
                width={35}
                height={35}
              />
            </Link>
            <Link href="/">
              <Image
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="Twitter"
                width={35}
                height={35}
              />
            </Link>
          </Box>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "1rem", color: "#8d8d8d", paddingBottom: "2rem" }}
          >
            Copyright 2024. All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
