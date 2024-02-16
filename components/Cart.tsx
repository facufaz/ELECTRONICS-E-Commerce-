import React from "react";
import { Box, Typography, Button as MuiButton } from "@mui/material";
import { Button } from "./Button";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <Box
      sx={{
        position: "absolute",
        top: 120,
        height: "100vh",
        width: "99.2vw",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 400,
          minHeight: "20vh",
          width: "20vw",
          backgroundColor: "white",
          color: "black",
          padding: "1.5rem",
          textTransform: "uppercase",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Cart</Typography>

          <MuiButton onClick={() => dispatch(clearCart())}>
            Remove All
          </MuiButton>
        </Box>

        {cart.map((product) => {
          return (
            <Box
              key={product.id}
              sx={{
                display: "flex",
                margin: "1rem 0",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Image
                src={product.image}
                width={50}
                height={50}
                alt="headphones"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{ maxWidth: 120, justifySelf: "start" }}
                >
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "#bab8ba" }}>
                  ${product.price}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignContent: "flex-end",
                }}
              >
                <Typography sx={{ fontSize: "0.75rem" }}>Count:</Typography>
                <Typography
                  sx={{
                    textTransform: "lowercase",
                    display: "flex",
                    justifyContent: "end",
                    fontWeight: 800,
                  }}
                >
                  {product.itemCount}
                </Typography>
              </Box>
            </Box>
          );
        })}

        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button
          sx={{ width: "100%", marginTop: "1rem" }}
          color="#e47c52"
          variant="contained"
        >
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
