import React, { useState } from "react";
import { Box, Container, Typography, Button as MuiButton } from "@mui/material";
import Image from "next/image";
import { Button } from "./Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart } from "../store/cartSlice";
import { APIProduct } from "../types";

interface Props {
  product: APIProduct;
}

const Product = ({ product }: Props) => {
  const [count, setCount] = useState(0);
  const { cart } = useAppSelector((state) => state.cart);

  const dispatch = useAppDispatch();

  return (
    <Container
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Image
        src={product.image?.desktop.replace(".", "")}
        width={600}
        height={600}
        alt="Headphones"
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "75vh",
          justifyContent: "center",
          width: "25vw",
          marginLeft: "8rem",
        }}
      >
        <Typography
          variant="h3"
          sx={{
            textTransform: "uppercase",
            color: "#e47c52 ",
            fontSize: "1.5rem",
            letterSpacing: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          New Product
        </Typography>

        <Typography
          variant="h1"
          sx={{
            textTransform: "uppercase",
            fontWeight: 500,
            fontSize: "4.5rem",
            marginBottom: "2rem",
          }}
        >
          {product.name}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            letterSpacing: 1,
            color: "#afadaf",
            fontSize: "1.25rem",
            marginBottom: "3rem",
            fontWeight: "800",
          }}
        >
          {product.description}
        </Typography>
        <Typography variant="h5" sx={{ marginBottom: "2rem", fontWeight: 700 }}>
          ${product.price}
        </Typography>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Box
            sx={{
              backgroundColor: "#afadaf",
              height: 60,
              display: "flex",
              alignItems: "center",
            }}
          >
            <MuiButton
              onClick={() => {
                count > 0 && setCount(count - 1);
              }}
            >
              -
            </MuiButton>
            {count}
            <MuiButton onClick={() => setCount(count + 1)}>+</MuiButton>
          </Box>

          <Button
            variant="contained"
            color="#d97d45"
            onClick={() => {
              {
                dispatch(
                  addToCart({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    itemCount: count,
                    image: product.image.mobile.replace(".", ""),
                  })
                );
              }
            }}
          >
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Product;
