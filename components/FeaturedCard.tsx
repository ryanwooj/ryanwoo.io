import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FeaturedContainerType } from "./FeaturedContainer";

const FeaturedCard: React.FC<FeaturedContainerType> = ({
  featured: { title, subtitle, description, image, link },
}) => {
  const [like, setLike] = useState(false);

  return (
    <div className="flex font-sans">
      <div className="flex-none w-48 pt-8 relative">
        <Image
          src={image}
          alt={title}
          width="500"
          height="500"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <form className="flex-auto p-6">
        <div className="flex flex-wrap">
          <h1 className="flex-auto text-lg font-semibold text-slate-900 dark:text-white">
            {subtitle}
          </h1>
          <button
            className="flex flex-none items-center justify-center w-9 h-9 rounded-md text-slate-300 border border-slate-200"
            type="button"
            onClick={() => setLike(!like)}
            aria-label="Like"
          >
            <svg
              width="20"
              height="20"
              fill={like ? "red" : "currentColor"}
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
          <div className="w-full flex-none text-sm font-medium text-slate-700 dark:text-slate-400 mt-2">
            {title}
          </div>
        </div>
        <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200"></div>
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <Link href={link}>
              <a className="px-6 py-2 font-semibold rounded-md bg-black text-white dark:bg-slate-200 dark:text-teal-800">
                View Website
              </a>
            </Link>
            <Link href={"/featured/" + subtitle.toLowerCase()}>
              <a className="px-6 py-2 font-semibold rounded-md border border-slate-200 text-slate-900 dark:text-white">
                Details
              </a>
            </Link>
          </div>
        </div>
        <p className="text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </form>
    </div>
  );
};

export default FeaturedCard;
