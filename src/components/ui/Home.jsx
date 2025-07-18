import React, { useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const cursorRef = useRef();

  const moveCursor = (e) => {
    const xCoordinates = e.clientX - 690; 
    const yCoordinates = e.clientY - 330;

    gsap.to(cursorRef.current, {
      x: xCoordinates,
      y: yCoordinates,
    });
  };

  const enlargeCursor = () => {
    gsap.to(cursorRef.current, {
      scale: 8,
      ease: "power2.out",
    });
  };

  const resetCursor = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      ease: "power2.out",
    });
  };

  return (
    <>      
      <div
        ref={cursorRef}
        className="cursor pointer-events-none bg-black absolute origin-center z-[-9] top-1/2 left-1/2 h-[2vh] w-[0.95vw] rounded-full"
      ></div>

      <div
        className="page1 h-[90.4vh] relative overflow-hidden"
        onMouseMove={moveCursor}
      >
        <div className="heroSection flex flex-col h-full items-center justify-center text-center">
          <h1
            onMouseOver={enlargeCursor}
            onMouseLeave={resetCursor}
            className="heroText GilroyHeavy text-7xl font-light leading-none tracking-tight"
          >
            🚀 Empower Your Learning Journey
          </h1>

          <h3 className="text-[1.5vw] mt-[6vw] font-bold">
            Master new skills with structured resources, hands-on practice, and
            expert guidance—all in one platform!
          </h3>

          <p className="w-[75%] text-xl font-medium mt-[1vw]">
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
