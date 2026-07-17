import React from "react";
import {
  profileDescription,
  workExperience,
  skills,
  githubRepos,
} from "../../data/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const SkillItem = ({ skillItem, isTechStack = false, iconSize = 15 }) => {
  if (!skillItem || !skillItem.icon) {
    return null;
  }

  return (
    <div className="flex items-center ring-2 ring-neutral-300 bg-neutral-900 rounded-sm p-2 pl-3">
      {React.cloneElement(skillItem.icon, { size: iconSize })}
      <span
        className={`ml-2 text-neutral-300 text-selection hover:text-neutral-200 duration-150 ease-in-out cursor-pointer ${
          isTechStack ? "text-xs" : "text-sm"
        }`}
      >
        {skillItem.name}
      </span>
    </div>
  );
};

const ProjectCard = ({ repo }) => {
  const renderSkills = () =>
    repo.techUsed.map((tech, index) => {
      const techSkill = skills.find((skill) => skill.name === tech);
      return <SkillItem skillItem={techSkill} isTechStack={true} key={index} />;
    });

  return (
    <div className="bg-neutral-900/80 rounded-md px-4 pt-3 py-4  hover:bg-neutral-700">
      <h3 className="text-xl font-bold mt-3">
        <a href={repo.link} target="_blank" rel="noopener noreferrer">
          {repo.name}
        </a>
      </h3>
      <p className="text-neutral-400 mt-4 text-sm">{repo.description}</p>
      <div className="flex items-center mt-4 gap-2 flex-wrap">
        {renderSkills()}
      </div>
    </div>
  );
};

const Skill = ({ icon, name, size }) => (
  <div
    className={`w-[${
      size === 48 ? "6em" : "5em"
    }] h-24 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20 p-2`}
  >
    {React.cloneElement(icon, { size })}
    <div className="text-balance text-center text-sm select-none pt-2">
      {name}
    </div>
  </div>
);

const SkillsList = ({ x, y }) => (
  <div className="flex flex-wrap gap-2">
    <>
      {skills.slice(x, y).map((skill) => (
        <Skill key={skill.key} icon={skill.icon} name={skill.name} size={48} />
      ))}
    </>
  </div>
);

const AboutMe = ({ page, handleDivClick, expandedDiv }) => {
  const renderPageContent = () => {
    switch (page) {
      case "About Me":
        return (
          <div className="hero min-h-auto justify-start">
            <div className="hero-content flex-col lg:flex-row">
            <img
                src="images/profile_pic.jpg"
                className="max-w-sm rounded-lg shadow-2xl"
                alt="Profile"
              />
              <div className="px-5">
                <h1 className="text-5xl font-bold mb-2">Nixon Wu</h1>
                <h3 className="text-xl font-bold">{profileDescription[0]}</h3>
                <p className="py-4">{profileDescription[1]}</p>
                <p className="py-2">{profileDescription[2]} <span className="hover:underline">{profileDescription[3]}</span></p>
              </div>
            </div>
          </div>
        );
      case "Experience":
        return (
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical my-8 pb-8">
            {workExperience.map((job, index) => {
              const isStart = index % 2 === 0;
              const isLast = index === workExperience.length - 1;

              return (
                <li key={job.key}>
                  {index > 0 && <hr className="bg-gray-500" />}
                  <div className="timeline-middle">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div
                    className={`${
                      isStart
                        ? "timeline-start md:text-end"
                        : "timeline-end"
                    } mb-10`}
                  >
                    <time className="font-mono text-lg italic">{job.year}</time>
                    <div className="text-xl font-bold">{job.company}</div>
                    <div className="text-md">{job.location}</div>
                    {job.position}
                    <div className="text-md italic mt-2">{job.tech}</div>
                  </div>
                  {!isLast && <hr className="bg-gray-500" />}
                </li>
              );
            })}
          </ul>
        );
      case "Skills":
        return (
          <div className="main-container flex h-screen relative">
            {expandedDiv === 0 && (
              <>
                <div
                  className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20"
                  onDoubleClick={() => handleDivClick(1)}
                >
                  <img
                    src="/images/folder.png"
                    alt="Technical"
                    className="w-12 h-12"
                  />
                  <div className="text-balance text-center text-sm select-none pt-2">
                    Technical Skills
                  </div>
                </div>

                <div
                  className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20"
                  onDoubleClick={() => handleDivClick(2)}
                >
                  <img
                    src="/images/folder.png"
                    alt="Soft"
                    className="w-12 h-12"
                  />
                  <div className="text-balance text-center text-sm select-none pt-2">
                    Soft Skills
                  </div>
                </div>

                
              </>
            )}

            {expandedDiv === 1 && (
              <div className="flex absolute top-0 gap-2">
                <SkillsList x={0} y={15} />
              </div>
            )}

            {expandedDiv === 2 && (
              <div className="flex absolute top-0 gap-1">
                <div className="w-[6.5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/communication.png"
                    alt="Communication"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Communication
                  </div>
                </div>
                <div className="w-[6em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/teamwork.png"
                    alt="Teamwork"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Teamwork
                  </div>
                </div>
                <div className="w-[5em] h-28 flex flex-col pt-2 items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/problem-solve.png"
                    alt="Problem"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Problem Solving
                  </div>
                </div>
                <div className="w-[6em] h-28 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/management.png"
                    alt="Project"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Project Management
                  </div>
                </div>
                <div className="w-[6em] h-28 flex flex-col justify-center items-center rounded-md hover:bg-white hover:bg-opacity-20">
                  <img
                    src="/images/leadership.png"
                    alt="Leadership"
                    className="w-12 h-12"
                  />
                  <div className="text-pretty text-center text-sm select-none pt-2">
                    Leadership
                  </div>
                </div>
              </div>
            )}

           
          </div>
        );
      case "Work":
        return (
          <div>
            <div className="grid sm:grid-cols-2 gap-2">
              {githubRepos.map((repo, index) => (
                <ProjectCard key={index} repo={repo} />
              ))}
            </div>
          </div>
        );
      default:
        return "404 not found";
    }
  };

  return (
    <main className="flex-1 min-h-0 h-full w-full ml-2.5 mt-2 pr-3 overflow-y-auto">
      {renderPageContent()}
    </main>
  );
};

export default AboutMe;
