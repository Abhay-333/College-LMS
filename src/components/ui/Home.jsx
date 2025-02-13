import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import illustration from "../../Resources/illustration.webp";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>

      <Outlet></Outlet>

      <div className=" h-[90.3vh]">
        <div className="heroSection flex flex-col relative h-full items-center justify-center">
          {/* <div className="leftHero bg-red-500 w-[50%] p-[1vw] flex flex-col">
            
            
            
          </div> */}
          {/* <div className="rightHero w-[50%] flex items-center justify-center"><img src={illustration} alt="" /></div> */}

          <h1 className="text-7xl heroText GilroyHeavy font-[100] leading-none tracking-tighter">
            🚀 Empower Your Learning Journey
          </h1>

          <h3 className="text-[1.5vw] mt-[8vw] font-[900] ">
            Master new skills with structured resources, hands-on practice, and
            expert guidance—all in one platform!
          </h3>

          <p className="w-[75%] text-xl font-[500] text-center leading-none mt-[1vw]">
            Welcome to the Learning Platform, designed to empower both students
            and teachers in their educational journey. Whether you're seeking
            tailored learning resources, engaging coding challenges, or a space
            to track your progress, we've got everything you need. Begin your
            learning adventure today and elevate your skills to new heights!
          </p>

        </div>
      </div>
    </>
  );
};

export default Home;
