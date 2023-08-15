import React from "react";
import HeroImage from "../assets/heroImage.png";
import { Link } from "react-scroll";


import { MdOutlineKeyboardArrowRight } from "react-icons/md";


const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 auto"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 pt-12 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className= "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            I'm a <span className='text-[#915EFF]'>Java Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I develop robust, scalable applications and <br className='sm:block hidden' />
          secured API's for Enterprise platforms.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
