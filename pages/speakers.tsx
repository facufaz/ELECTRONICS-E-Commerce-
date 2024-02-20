import React, { useEffect, useState } from "react";
import CategoryCardContainer from "../components/CategoryCardContainer";
import About from "../components/Shared/About";
import Footer from "../components/Shared/Footer";
import { Nav } from "../components/nav";
import { NextPage } from "next";
import CategoryPageHeader from "../components/CategoryPageHeader";
import CategoryItemContainer from "../components/Shared/CategoryItemContainer";

const Speakers: NextPage = () => {
  const category = "speakers";

  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const product = Array.from(new Set(data));

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        response.map((item: any) => {
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

      {product.map((item: any) => {
        return <CategoryItemContainer item={item} key={item.id} />;
      })}

      <CategoryCardContainer />
      <About />
      <Footer />
    </div>
  );
};

export default Speakers;
