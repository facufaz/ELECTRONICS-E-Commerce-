import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container, Button, Typography } from "@mui/material";
import Cart from "./Cart";
import { useAppSelector } from "../store/hooks";

export const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div style={{ padding: "2rem 0", backgroundColor: "#191919" }}>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
          <Link style={{ marginRight: "2rem", fontWeight: 700 }} href="/">
            Headphones
          </Link>
          <Link style={{ marginRight: "2rem", fontWeight: 700 }} href="/">
            Speakers
          </Link>
          <Link style={{ marginRight: "2rem", fontWeight: 700 }} href="/">
            Earphones
          </Link>
        </ul>

        <Button onClick={() => setShowCart(!showCart)}>
          <Image
            src="./assets/shared/desktop/icon-cart.svg"
            alt="Cart"
            width={30}
            height={30}
          />
          <Typography sx={{ marginLeft: "0.5rem", color: "white" }}>
            ({cart.length})
          </Typography>
        </Button>
      </Container>
      {showCart ? <Cart /> : null}
    </div>
  );
};
