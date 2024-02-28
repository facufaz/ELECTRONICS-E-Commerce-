import { NextPage } from "next";
import Footer from "../components/Shared/Footer";
import { Nav } from "../components/nav";
import CheckoutContainer from "../components/CheckoutContainer";

const Checkout: NextPage = () => {
  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <Nav />
      <CheckoutContainer />
      <Footer />
    </div>
  );
};

export default Checkout;
