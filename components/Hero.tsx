"use client";
import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { TextGenerateEffect } from "./ui/text-generate-effect";
// import {image1} from "../app/assets/tailwind.svg"
import nextjsLogo from '../app/assets/nextjs.svg';
import reactLogo from '../app/assets/react.svg';
import schadcnLogo from '../app/assets/schadcn.svg';

import Image from 'next/image';
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { HoverBorderGradientDemo } from "./ui/hover-border-gradient-modi";
const words = `We build exceptional websites, scalable applications, and innovative blockchain solutions.`;



export function Hero() {
  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Transforming Ideas into Digital Solutions
        </h1>
        <TextGenerateEffect words={words} />
        <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
          <HoverBorderGradientDemo/>
        </div>
      </div>
      <BackgroundBeams />

    </div>
  );
}
