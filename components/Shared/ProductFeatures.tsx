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
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ textTransform: "uppercase" }}>Features</Typography>
          <Typography>{features}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ textTransform: "uppercase" }}>
            in the box
          </Typography>
          {includes.map((item: any) => {
            return (
              <Typography key={item.item}>
                {item.quantity}
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
