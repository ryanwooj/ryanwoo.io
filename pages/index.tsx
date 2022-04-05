import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "../components/Container";
import BlogPostCard from "../components/BlogPostCard";
import ExperienceCard from "../components/ExperienceCard";

const Home: NextPage = () => {
  console.log(process.env.NODE_ENV);
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-3 text-black dark:text-white">
              Ryan Woo
            </h1>
            <h2 className="text-gray-700 dark:text-gray-200 mb-4">
              Full Stack Web Developer / Software Engineer at{" "}
              <span className="font-semibold">Jet Bridge LLC</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-16">
              Helping clients build a faster web. I&apos;m all about web
              development, serverless, and React / Next.js.
            </p>
          </div>
          <div className="w-32 h-32 relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Ryan Woo"
              layout="fill"
              src="/avatar.png"
              objectFit="cover"
              className="rounded-full filter grayscale"
            />
          </div>
        </div>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white">
          Featured
        </h3>
        <div className="flex flex-wrap overflow-x-auto gap-4 py-4 flex-col md:flex-row justify-center">
          <BlogPostCard
            title="Moter"
            slug="moter"
            image="/moter.jpg"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="GUESS"
            slug="guess"
            image="/guess.jpg"
            gradient="from-[#6ee7b7] via-[#3b82f6] to-[#9333ea]"
          />
          <BlogPostCard
            title="GuessFactory"
            slug="guessfactory"
            image="/guessfactory.png"
            gradient="from-[#fde68a]  to-[#fca5a5]"
          />
          <BlogPostCard
            title="Marciano"
            slug="marciano"
            image="/marciano.png"
            gradient="from-[#D8B4FE] via-[#818CF8] to-[#6ee7b7]"
          />
        </div>
        <Link href="/featured">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            View all websites
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Experiences
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          All about your work history and nothing else.
        </p>
        <ExperienceCard
          slug="/experience/1"
          index="01"
          fromTo="July 2021 - Current"
          title="Jet Bridge LLC: Full Stack Web Developer"
        />
        <ExperienceCard
          slug="/experience/2"
          index="02"
          fromTo="Oct 2019 - Jan 2022"
          title="GUESS: Front-end Developer"
        />
        <ExperienceCard
          slug="/experience/3"
          index="03"
          fromTo="June 2019 - Sept 2019"
          title="Apple: Front-end Developer"
        />
        <ExperienceCard
          slug="/experience/4"
          index="04"
          fromTo="June 2016 - Nov 2017"
          title="Google Play: Data Quality Engineer"
        />
        <Link href="/experience">
          <a className="flex mt-8 text-gray-600 dark:text-gray-400 leading-7 rounded-lg hover:text-gray-800 dark:hover:text-gray-200 transition-all h-6">
            View all experiences
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="h-6 w-6 ml-1"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.5 12h-15m11.667-4l3.333 4-3.333-4zm3.333 4l-3.333 4 3.333-4z"
              />
            </svg>
          </a>
        </Link>

        <span className="h-16" />
      </div>
    </Container>
  );
};

export default Home;
