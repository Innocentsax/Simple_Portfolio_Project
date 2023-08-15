
// import React from "react";

// const WorkExperience = () => {
//   const experiences = [
//     {
//       id: 1,
//       jobTitle: "C-Lang Developer",
//       roles: "Developing and maintaining Simple GUI Terminal (Simple shell) for Bash and Script writing, using C-Lang and other related technologies.",
//       company: "HOLBERTON SCHOOL",
//     },
//     {
//       id: 2,
//       jobTitle: "Python Developer",
//       roles: "Collaborative Problem-Solving: Collaborated closely with the data science team, showcasing strong teamwork and communication skills while architecting the solution and ensuring data integrity through comprehensive testing.",
//       company: "ALX AFRICA",
//     },
//     {
//       id: 3,
//       jobTitle: "Java Developer",
//       roles: "Wrote integration tests for all applications using JUnit/Mockito, significantly reducing customer complaints about bugs and application malfunctions. Designed and built scalable APIs to increase development workflow by 25%",
//       company: "DECAGON",
//     },
//   ];

//   return (
//     <div id="work-experience" className="bg-gradient-to-b from-black to-gray-800 text-white py-16">
//       <div className="max-w-screen-lg mx-auto px-4">
//         <div className="pb-8">
//           <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
//             Work Experience
//           </h2>
//           <p className="py-6">Explore some of the roles I've taken on</p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
//           {experiences.map(({ id, jobTitle, roles, company }) => (
//             <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
//               <div className="p-4">
//                 <h3 className="text-xl font-semibold">{jobTitle}</h3>
//                 <p className="mt-2">{roles}</p>
//               </div>
//               <div className="flex items-center justify-center space-x-4 p-4">
//                 <a href={company} className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
//                   Company
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;

import React from "react";

const WorkExperience = () => {
  const experiences = [
    {
      id: 1,
      jobTitle: "C-Lang Developer Intern at HOLBERTON",
      roles: "Developing and maintaining Simple GUI Terminal (Simple shell) for Bash and Script writing, using C-Lang and other related technologies.",
      company: "HOLBERTON SCHOOL",
    },
    {
      id: 2,
      jobTitle: "Python Developer Intern at ALX AFRICA",
      roles: "Collaborative Problem-Solving: Collaborated closely with the data science team, showcasing strong teamwork and communication skills while architecting the solution and ensuring data integrity through comprehensive testing.",
      company: "ALX AFRICA",
    },
    {
      id: 3,
      jobTitle: "Java Developer at DECAGON",
      roles: "Wrote integration tests for all applications using JUnit/Mockito, significantly reducing customer complaints about bugs and application malfunctions. Designed and built scalable APIs to increase development workflow by 25%",
      company: "DECAGON",
    },
  ];

  const handleJobTitleClick = (company) => {
    console.log(`Company: ${company}`);
  };

  return (
    <div id="work-experience" className="bg-gradient-to-b from-black to-gray-800 text-white py-16">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Work Experience
          </h2>
          <p className="py-6">Explore some of the roles I've taken on</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 sm:px-0">
          {experiences.map(({ id, jobTitle, roles, company }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg overflow-hidden">
              <div className="p-4">
                <h3
                  className="text-xl font-semibold cursor-pointer"
                  onClick={() => handleJobTitleClick(company)}
                >
                  {jobTitle}
                </h3>
                <p className="mt-2">{roles}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;


