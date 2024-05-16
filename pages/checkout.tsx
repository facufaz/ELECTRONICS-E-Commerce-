import { NextPage } from "next";
import Footer from "../components/Shared/Footer";
import { Nav } from "../components/nav";
import CheckoutContainer from "../components/CheckoutContainer";
import Summary from "../components/Summary";
import { Box, Container } from "@mui/material";

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      <Container>
        <Box sx={{ display: "flex", marginTop: "52rem" }}>
          <CheckoutContainer />
          <Summary />
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default Checkout;
