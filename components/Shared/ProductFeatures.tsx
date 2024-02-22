import { Box, Container, Typography } from "@mui/material";
import React from "react";

interface Interface {
  quantity: number;
  item: string;
}

interface Props {
  features: string;
  includes: Interface[];
}

const ProductFeatures = ({ includes, features }: Props) => {
  return (
    <Container>
      <Box sx={{ display: "flex", marginTop: "5rem" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            maxWidth: "60%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontSize: "2rem",
              fontWeight: 500,
              marginBottom: "4rem",
            }}
          >
            Features
          </Typography>
          <Typography variant="subtitle1">{features}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            marginLeft: "3rem",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              textTransform: "uppercase",
              fontSize: "2rem",
              fontWeight: 500,
              marginBottom: "4rem",
            }}
          >
            in the box
          </Typography>
          {includes.map((item: any) => {
            return (
              <Typography variant="subtitle1" key={item.item}>
                <span
                  style={{
                    color: "#d87d4a",
                    marginRight: "0.5rem",
                    fontWeight: 900,
                    fontSize: "0.9rem",
                  }}
                >
                  {item.quantity}x
                </span>
                {item.item}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductFeatures;
