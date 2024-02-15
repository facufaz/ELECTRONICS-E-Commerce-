import React, { useEffect, useState } from "react";
import { Nav } from "../components/Nav";
import { Box } from "@mui/system";
import Product from "../components/Product";
import { useRouter } from "next/router";

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([{ id: "1" }]);
  const [isLoading, setLoading] = useState(true);
  const [product, setProduct] = useState([{ id: "0" }]);

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
    </Box>
  );
};

export default ProductDetails;
