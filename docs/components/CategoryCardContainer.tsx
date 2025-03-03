import { Box, Container } from "@mui/material";
import React from "react";
import CategoryCard from "./CategoryCard";

const CategoryCardContainer = () => {
  return (
    <Box
      sx={{
        margin: "16rem 0 8rem 0",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: 2400,
        }}
      >
        <CategoryCard category="headphones" />
        <CategoryCard category="speakers" />
        <CategoryCard category="earphones" />
      </Container>
    </Box>
  );
};

export default CategoryCardContainer;
