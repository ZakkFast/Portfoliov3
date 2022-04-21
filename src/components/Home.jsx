import React from 'react';
import { HiArrowNarrowDown } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#9bc1bc]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#333]">Hey there, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ed6a5a]">
          Zakk Fast
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#333]">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-[#333] py-4 max-w-[700px]">
          I am a solution-driven Full-Stack Developer. Specializing in creating
          striking and extra-ordinary digital experiences. At the moment I am
          building scalable, full-stack applications using the MERN stack.
          However, my curious nature is always leading to new tech being added
          to my Web Dev Aresenal.
        </p>
        <div>
            <button className="text-[#ed6a5a] group border-2 border-[#333] px-6 py-3 my-2 flex items-center font-bold hover:bg-[#ed6a5a] hover:text-[#333] hover:border-[#ed6a5a]">
          <Link to="work" smooth={true} duration={500}>
              <span className="animate-pulse">
              View Work
                <HiArrowNarrowDown className="mx-auto " />
              </span>
          </Link>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
