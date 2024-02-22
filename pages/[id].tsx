import React, { useEffect, useState } from "react";
import { Nav } from "../components/nav";
import { Box } from "@mui/system";
import Product from "../components/Product";
import { useRouter } from "next/router";
import ProductFeatures from "../components/Shared/ProductFeatures";
import CategoryCardContainer from "../components/CategoryCardContainer";
import About from "../components/Shared/About";
import Footer from "../components/Shared/Footer";
import ProductGallery from "../components/Shared/ProductGallery";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([{ id: "1" }]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    id: "0",
    features: "",
    includes: [{ quantity: 0, item: "" }],
    gallery: {
      first: { desktop: "" },
      second: { desktop: "" },
      third: { desktop: "" },
    },
  });

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setLoading(false);
        response.map((item: any) => {
          if (item.id.toString() === id) {
            setProduct(item);
          }
        });
      });
  }, [id]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <Box>
      <Nav />
      <Product product={product} />
      <ProductFeatures
        features={product.features}
        includes={product.includes}
      />
      <CategoryCardContainer />
      <ProductGallery gallery={product.gallery} />
      <About />
      <Footer />
    </Box>
  );
};

export default ProductDetails;
