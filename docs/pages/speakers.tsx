import React, { useEffect, useState } from "react";
import CategoryCardContainer from "../components/CategoryCardContainer";
import About from "../components/Shared/About";
import Footer from "../components/Shared/Footer";
import { Nav } from "../components/nav";
import { NextPage } from "next";
import CategoryPageHeader from "../components/CategoryPageHeader";
import CategoryItemContainer from "../components/Shared/CategoryItemContainer";
import { APIProduct } from "../types";

const Speakers: NextPage = () => {
  const category = "speakers";

  const [data, setData] = useState<APIProduct[]>([]);
  const [isLoading, setLoading] = useState(true);
  const product = Array.from(new Set(data));

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        response.map((item: APIProduct) => {
          if (item.category === category) {
            data.unshift(item);
          }
        });
      });
  }, [data]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Nav />
      <CategoryPageHeader category={category} />

      {product.map((item: APIProduct) => {
        return <CategoryItemContainer item={item} key={item.id} />;
      })}

      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Speakers;
