import { Box, Container, Typography } from "@mui/material";
import React from "react";

interface Props {
  category: string;
}

const CategoryPageHeader = ({ category }: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1a1a1a",
        minHeight: "5rem",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        sx={{
          color: "white",
          textTransform: "uppercase",
          fontSize: "2rem",
          fontWeight: 800,
        }}
        variant="h3"
      >
        {category}
      </Typography>
    </Box>
  );
};

export default CategoryPageHeader;
