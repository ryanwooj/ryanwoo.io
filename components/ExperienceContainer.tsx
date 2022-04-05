import React from "react";

interface ExperienceContainerType {
  experience: ExperienceType;
}

type ExperienceType = {
  company: string;
  titles: Titles[];
  dates: string;
  location: string;
};

type Titles = {
  title: string;
  description: string[];
};

const ExperienceContainer: React.FC<ExperienceContainerType> = ({
  experience: { company, titles, dates, location },
}) => {
  return (
    <div className="container">
      <div className="text-center text-xl my-4">{company}</div>{" "}
      <div className="text-right text-lg">{dates}</div>
      <div className="text-right text-lg">{location}</div>
      <div>
        {titles.map((item, idx) => (
          <div className="desc" key={idx}>
            <div className="text-left text-lg">{item.title}</div>
            {item.description.map((item, idx) => (
              <p key={idx} className="text-left text-md">
                {item}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceContainer;
