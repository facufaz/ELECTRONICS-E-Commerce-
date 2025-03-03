import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  category: string;
}

const CategoryCard = ({ category }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textTransform: "uppercase",
        minWidth: "23rem",
      }}
    >
      <Image
        src={`/assets/shared/desktop/image-category-thumbnail-${category}.png`}
        width={250}
        height={230}
        alt={category}
      />
      <Typography
        variant="h4"
        sx={{
          marginBottom: "1rem",
          fontSize: "1.5rem",
        }}
      >
        {category}
      </Typography>

      <Link href={`/${category}`} style={{ color: "#8f8f8f" }}>
        Shop
      </Link>

      <Box
        sx={{
          position: "relative",
          height: "13rem",
          width: "100%",
          backgroundColor: "#f2f1f2",
          bottom: "185px",
          zIndex: "-1",
        }}
      />
    </Box>
  );
};

export default CategoryCard;
