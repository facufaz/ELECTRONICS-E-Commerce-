import { Container } from "@mui/material";
import React from "react";
import CategoryCardContainer from "../components/CategoryCardContainer";
import About from "../components/Shared/About";
import Footer from "../components/Shared/Footer";
import { Nav } from "../components/nav";
import { NextPage } from "next";
import CategoryPageHeader from "../components/CategoryPageHeader";

const Headphones: NextPage = () => {
  return (
    <div>
      <Nav />
      <CategoryPageHeader category="headphones" />
      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Headphones;
