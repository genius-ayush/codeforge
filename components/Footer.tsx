import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function Footer() {
  return (
    <div className="border-t-2 border-slate-100/10 w-full">
    <div className="h-[20rem] flex items-center justify-center max-w-screen-xl ml-52 ">
      <TextHoverEffect text="CodeForge" />
    </div>

    <div className="text-center text-sm mb-5">© Copyright CodeForge 2024. All rights reserved.</div>
    
    </div>
  );
}
