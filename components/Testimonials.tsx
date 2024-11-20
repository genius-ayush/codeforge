"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "CodeForge turned our vision into reality with precision and speed – highly recommend!",
    name: "Krati Gautam",
    title: "Founder of Akrati Inc.",
  },
  {
    quote:
      "Their expertise and commitment to quality exceeded our expectations.",
    name: "Ayush Asati",
    title: "Devops Engineer at Digivalet",
  },
  {
    quote: "From concept to deployment, CodeForge delivered exceptional results on time.",
    name: "Darshan Pathak",
    title: "Co-founder of Tech Sol.",
  },
  {
    quote:
      "The team’s ability to customize solutions made all the difference for our project.",
    name: "Rajveer Singh Shekhawat",
    title: "Director of Ghanikhamma Hotels",
  },
  {
    quote:
      "CodeForge’s agile approach ensured seamless collaboration and outstanding outcomes.",
    name: "Om Sharma",
    title: "Founder of Anantyoga",
  },
  
];
