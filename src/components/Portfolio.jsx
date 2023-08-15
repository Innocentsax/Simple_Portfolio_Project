import React from "react";
import arrayDestruct from "../assets/portfolio/arrayDestruct.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
      githubLink: "https://github.com/Innocentsax/FULL_STACK_PROJECTS/tree/main/Movie_Review_Website",
    },
    {
      id: 4,
      src: reactSmooth,
      githubLink: "https://github.com/Innocentsax/FULL_STACK_PROJECTS/tree/main/Static_web_application_with_SpringBoot",
    },
    {
      id: 5,
      src: installNode,
      githubLink: "https://github.com/Innocentsax/Spring_Boot3_Hibernate-JPA/tree/main/simple-form",
    },
  ];

  return (
    <div
      id="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Portfolio
          </h2>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {portfolios.map(({ id, src, githubLink }) => (
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden"
            >
              <div className="w-full h-60">
                <img
                  src={src}
                  alt=""
                  className="object-cover w-full h-full transition-transform transform hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center space-x-4 p-4">
                <a
                  href={githubLink}
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  
                </a>
                <a
                  href={githubLink}
                  className="w-1/2 px-6 py-3 duration-200 hover:scale-105"
                >
                  Source Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
