import Image from "next/image";
import Link from "next/link";
import React from "react";

export type FeaturedContainerType = {
  featured: FeatureType;
};

export type FeatureType = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
};

const FeaturedContainer: React.FC<FeaturedContainerType> = ({
  featured: { title, subtitle, description, image, link },
}) => {
  console.log(title, subtitle);
  return (
    <div className="container">
      <div className="text-center text-2xl my-2">{subtitle}</div>
      <div className="flex justify-end">
        <Link href={link ? link : "/"}>
          <a className="text-right text-lg hover:text-sky-500">{title}</a>
        </Link>
      </div>
      <div className="flex justify-center my-4">
        <Link href={link ? link : "/"}>
          <Image
            className=""
            src={image ? image : "/"}
            alt={title}
            width={500}
            height={300}
          />
        </Link>
      </div>
      <div className="text-left text-lg">{description}</div>
    </div>
  );
};

export default FeaturedContainer;
