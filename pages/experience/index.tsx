import React, { useRef, useState } from "react";
// import { appConfig } from "../../../../appConfig";
import Container from "../../components/Container";
import ExperienceCard from "../../components/ExperienceCard";

interface ExperienceProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

const experienceData = [
  { title: "Experience", content: "Some Experience" },
  { title: "Experience2", content: "Some Experience" },
  { title: "Experience3", content: "Some Experience" },
];

const Experience: React.FC<ExperienceProps> = () => {
  return (
    <Container>
      <div className="flex flex-col justify-start items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-8">
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Experiences
        </h3>
        <p className="w-full text-gray-600 dark:text-gray-400 mb-4">
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
      </div>
    </Container>
  );
};
export default Experience;
