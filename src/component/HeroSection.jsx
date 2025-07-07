import React from 'react';
import bgImg  from '../assets/img/team-man.jpg';

const HeroSection = () => {
  return (

    <div
      className=" h-[700px] flex flex-col justify-center items-center sm:px-20 lg:px-32 px-4 sm:py-32 gap-6 bg-cover bg-start bg-no-repeat text-white"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-center">
        Empower Your Team to Work <br /> Smarter
      </h1>
      <p className="font-semibold text-sm sm:text-xl lg:text-2xl text-center text-gray-200">
        Streamline collaboration, track progress, and boost productivity <br />— all in one intuitive platform
      </p>

      <div className="flex flex-wrap gap-10">
        <button className="py-4 px-6 rounded bg-pink-500 hover:text-white transition text-sm shadow-2xl">
          Get Started Free
        </button>
        <button className="py-4 px-6 rounded bg-pink-500 hover:text-white transition text-sm shadow-2xl">
          Watch Demo
        </button>
      </div>
    </div> 
  );
};

export default HeroSection;
