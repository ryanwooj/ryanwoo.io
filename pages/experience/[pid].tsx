import { useRouter } from "next/router";
import Container from "../../components/Container";
import ExperienceContainer from "../../components/ExperienceContainer";
import { experiences } from "../../data/data";

const SingleExperience = () => {
  const router = useRouter();

  const { pid } = router.query;
  return (
    <Container>
      <div className="flex flex-col justify-start items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16 pt-8">
        <div className="container">
          <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Experiences
          </h3>
          {(experiences && (
            <ExperienceContainer experience={experiences[Number(pid) - 1]} />
          )) ||
            ""}
        </div>
      </div>
    </Container>
  );
};

export default SingleExperience;
