import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white py-16"
    >
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="pb-8">
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            About
          </h2>
        </div>

        <p className="text-lg md:text-xl mt-5">
          I'm a skilled software developer with experience in Java and JavaScript,
          and expertise in frameworks like SpringBoot, React, and Security.
          I'm a quick learner and collaborate closely with clients to create efficient,
          scalable, and user-friendly solutions that solve real-world problems.
          Let's work together to bring your ideas to life!
        </p>
      </div>
    </div>
  );
};

export default About;
