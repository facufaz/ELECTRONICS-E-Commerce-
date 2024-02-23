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
import Recommendations from "../components/Shared/Recommendations";

const ProductDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  const [data, setData] = useState([{ id: "1" }]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState({
    id: "0",
    features: "",
    includes: [{ quantity: 0, item: "" }],
    others: [],
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
          if (item.slug === slug) {
            setProduct(item);
          }
        });
      });
  }, [slug]);

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
      <Recommendations recommendations={product.others} />
      <About />
      <Footer />
    </Box>
  );
};

export default ProductDetails;
