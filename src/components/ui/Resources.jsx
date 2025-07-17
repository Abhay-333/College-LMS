import React from "react";
import Cards from "./Cards";
import { Outlet } from "react-router-dom";
const Resources = () => {
  const resourcesDetails = [
    {
      resourceTitle: "YouTube Tutorials",
      resourceDescription:
        "YouTube offers free, high-quality coding tutorials from experienced instructors who explain concepts with practical examples.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://www.youtube.com/c/TraversyMedia",
        "https://www.youtube.com/c/Academind",
        "https://www.youtube.com/c/CodeWithHarry",
        "https://www.youtube.com/c/TheNetNinja",
        "https://www.youtube.com/@sheryians",
        "https://www.youtube.com/@javascriptmastery",
        "https://www.youtube.com/@chaiaurcode",
        "https://www.youtube.com/@RoadsideCoder",
        "https://www.youtube.com/@rahuulmiishra",
      ],
    },

    {
      resourceTitle: "Interactive Coding Platforms",
      resourceDescription:
        "Interactive platforms provide hands-on learning experiences through coding exercises and real-time feedback. These platforms often start with beginner-friendly lessons and gradually progress to more advanced topics.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://www.freecodecamp.org/",
        "https://leetcode.com/",
        "https://www.codechef.com/",
        "https://www.hackerrank.com/",
        "https://www.codecademy.com/",
      ],
    },

    {
      resourceTitle: "Online Courses(Free/Paid)",
      resourceDescription:
        "Online learning platforms provide structured coding courses that can be self-paced or instructor-led.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://data-flair.training/",
        "https://www.udemy.com/",
        "https://www.coursera.org/",
        "https://www.edx.org/",
        "https://www.edx.org/cs50",
        "https://www.sheryians.com/courses",
      ],
    },

    {
      resourceTitle: "Project-Based Learning",
      resourceDescription:
        "Building real-world projects helps students understand how to apply theoretical knowledge in practical scenarios.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://www.frontendmentor.io/",
        "https://github.com/",
        "https://www.kaggle.com/",
        "https://github.com/sindresorhus/awesome",
      ],
    },

    {
      resourceTitle: "Practice with Problem-Solving",
      resourceDescription:
        "Solving coding problems strengthens logical thinking and prepares students for technical interviews.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://www.geeksforgeeks.org/",
        "https://codeforces.com/",
        "https://www.codewars.com/",
        "https://www.topcoder.com/",
      ],
    },

    {
      resourceTitle: "Join Online Communities",
      resourceDescription:
        "Engaging in discussions and collaborating with other learners or experienced programmers accelerates learning.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://stackoverflow.com/questions",
        "https://www.reddit.com/r/learnprogramming/?rdt=46080",
        "https://dev.to/",
        "https://hashnode.com/",
      ],
    },

    {
      resourceTitle: "Bootcamps & Mentorship",
      resourceDescription:
        "Bootcamps offer structured learning paths with mentor support, helping students transition into the industry faster.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://www.theodinproject.com/",
        "https://www.codingninjas.com/",
        "https://www.scaler.com/",
      ],
    },

    {
      resourceTitle: "Read Documentation & Blogs",
      resourceDescription:
        "Reading official documentation and technical blogs provides in-depth understanding and best practices for coding.",
      reference: "/resourceDetails",
      resourceLinks: [
        "https://developer.mozilla.org/en-US/",
        "https://javascript.info/",
        "http://docs.python.org/3/",
        "https://www.smashingmagazine.com/",
        "https://css-tricks.com/",
      ],
    },

    {
      resourceTitle: "AI-Powered Learning",
      resourceDescription:
        "AI tools assist in debugging, code generation, and learning programming concepts efficiently.",
      reference: "/resourceDetails",
      resourceLinks: ["https://codeium.com/chat", "https://github.com/features/copilot", "https://chatgpt.com/"],
    },

    {
      resourceTitle: "Gamified Learning",
      resourceDescription:
        "Learning through games makes coding more engaging and helps retain concepts better.",
      reference: "/resourceDetails",
      resourceLinks: ["https://codecombat.com/", "https://cssbattle.dev/", "https://flexboxfroggy.com/", "https://checkio.org/"],
    },
  ];

  return (
    <div className="h-[90.3vh]">
      <Outlet></Outlet>
      {/* <h1>Learn From Youtube Tutorials</h1>
      <h1>Learn From Original Documentation</h1>
      <h1>Learn From Interactive Platforms</h1>
      <h1>Learn From Online Courses(Paid/Free)</h1>
      <h1>Learn From Project Based Learning</h1>
      <h1>Learn From Practice with Problem Solving</h1>
      <h1>Join Coding Communities</h1>
      <h1>BootCamps & Mentorship</h1>
      <h1>AI Powered Learning</h1>
      <h1>Gamified Learning</h1> */}

      <Cards resources={resourcesDetails}></Cards>
    </div>
  );
};

export default Resources;
