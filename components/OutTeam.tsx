"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Ayush Rawal",
    designation: "Software Engineer",
    image:
      "/ayush1.png",
  },
  {
    id: 2,
    name: "Darshan Pathak",
    designation: "UI/UX Engineer",
    image:
      "/dp.png",
  },
  {
    id: 3,
    name: "Ayush Asati",
    designation: "Devops Engineer",
    image:
      "/asati.png",
  },
  {
    id: 4,
    name: "Anshul Soni",
    designation: "Lead Engineer",
    image:
    "/anshul.png",
  },
  {
    id: 5,
    name: "Rajveer Shekhawat",
    designation: "Co-founder",
    image:
      "/rajveer.png",
  },
  {
    id: 6,
    name: "Krati Gautam",
    designation: "Founder",
    image:
      "/krati.png",
  },
];

export default function OurTeam() {
  return (
    <>

<div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white mb-20 mt-5">
          Our Team
        </h4>

        
      </div>
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
    </>
  );
}
