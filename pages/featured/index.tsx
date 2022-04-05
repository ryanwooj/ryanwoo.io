import React from "react";
import FeaturedCard from "../../components/FeaturedCard";
import Container from "../../components/Container";
import { featured } from "../../data/data";

const Featured = () => {
  return (
    <Container>
      <div className="flex flex-col justify-start items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-8">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured
        </h3>
        {featured.map((item) => (
          <FeaturedCard featured={item} />
        ))}
      </div>
    </Container>
  );
};

export default Featured;
