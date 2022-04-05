import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Container from "../../components/Container";
import FeaturedContainer from "../../components/FeaturedContainer";
import { featured } from "../../data/data";
import { FeatureType } from "../../components/FeaturedContainer";

const Featured = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [dataValue, setDataValue] = useState<Array<FeatureType>>([]);
  useEffect(() => {
    const data = Object.values(
      featured.filter((item) => item.subtitle.toLowerCase() === String(pid))
    );
    setDataValue(data);
  }, [pid]);
  return (
    <Container>
      <div className="flex flex-col justify-start items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-8">
        <div className="container">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Featured
          </h3>
          {dataValue[0] && <FeaturedContainer featured={dataValue[0]} />}
        </div>
      </div>
    </Container>
  );
};

export default Featured;
