import type { NextPage } from "next";
import { Nav } from "../components/nav";
import Hero from "../components/Hero";
import { Container } from "@mui/material";
import CategoryCardContainer from "../components/CategoryCardContainer";
import SpeakerZX9 from "../components/Home/SpeakerZX9";
import SpeakerZX7 from "../components/Home/SpeakerZX7";
import EarphonesYX1 from "../components/Home/EarPhonesYX1";
import About from "../components/Shared/About";
import Footer from "../components/Shared/Footer";

const Home: NextPage = () => {
  return (
    <div>
      <div
        style={{
          color: "white",
          backgroundImage: "url(./assets/home/desktop/image-hero.jpg)",
          height: "100vh",
          backgroundSize: "100%",
        }}
      >
        <Container>
          <Nav />
          <hr />
          <Hero />
        </Container>
      </div>

      <CategoryCardContainer />
      <SpeakerZX9 />
      <SpeakerZX7 />
      <EarphonesYX1 />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
