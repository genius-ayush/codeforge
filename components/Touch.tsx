"use client";

import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";


export default function Touch() {
  const placeholders = [
    "Enter you Email to get in touch"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <div className="h-[30rem] flex flex-col justify-center  items-center px-4">
      <h2 className="mb-2 sm:mb-10 text-xl text-center sm:text-5xl dark:text-white text-black">
      Let&apos;s Build Your Vision Together
      </h2>
      <p className="mb-5">Contact us today for a personalized consultation and discover how we can elevate your project.</p>
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
