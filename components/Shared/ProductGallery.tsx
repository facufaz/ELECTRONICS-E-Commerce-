import { Box, Container } from "@mui/material";
import React from "react";
import Image from "next/image";

interface Props {
  gallery: {
    first: { desktop: string };
    second: { desktop: string };
    third: { desktop: string };
  };
}
const ProductGallery = ({ gallery }: Props) => {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Image
          src={gallery.first.desktop.replace(".", "")}
          alt="product image"
          width={445}
          height={280}
        />
        <Image
          src={gallery.second.desktop.replace(".", "")}
          alt="product image"
          width={445}
          height={280}
        />
      </Box>
      <Image
        src={gallery.third.desktop.replace(".", "")}
        alt="product image"
        width={635}
        height={592}
        style={{ marginLeft: "2rem" }}
      />
    </Container>
  );
};

export default ProductGallery;
