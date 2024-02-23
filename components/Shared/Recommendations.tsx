import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Button } from "../Button";
import Link from "next/link";
import { RecommendationsType } from "../../types";

interface Props {
  recommendations: any[] | undefined;
}

const Recommendations = ({ recommendations }: Props) => {
  return (
    <Container sx={{ marginTop: "8rem" }}>
      <Typography
        variant="h3"
        sx={{
          textTransform: "uppercase",
          fontWeight: "1rem",
          display: "flex",
          justifyContent: "center",
          marginBottom: "4rem",
        }}
      >
        you may also like
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        {recommendations.map((product) => {
          return (
            <Box key={product.slug}>
              <Image
                src={product.image.desktop.replace(".", "")}
                alt={product.name}
                width={350}
                height={330}
              />
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "1rem",
                  fontSize: "1.5rem",
                }}
              >
                {product.name}
              </Typography>
              <Box
                sx={{
                  marginTop: "1rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="#d87d4a">
                  <Link href={`/${product.name}`}>See Product</Link>
                </Button>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Container>
  );
};

export default Recommendations;
