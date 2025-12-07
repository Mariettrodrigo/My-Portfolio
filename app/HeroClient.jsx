"use client";

import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function HeroClient() {
  return (
    <section className="hero max-w-4xl mx-auto py-12 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold">
        Hello, I’m{" "}
        <span className="text-orange-600">Mariyeta Rodrigo</span>
      </h1>

      <h2 className="mt-4 text-xl md:text-2xl text-gray-700">
        <Typewriter
          words={[
            "IT Enthusiast",
            "Aspiring Software Developer",
            "Tech-Savvy Problem Solver",
            "Business Analyst in Progress",
            "Project Management Learner",
            "Computing & Information Systems Undergraduate"
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>

      <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
        Undergraduate in Computing & Information Systems — I enjoy building useful software, learning APIs, and exploring digital solutions.
      </p>
    </section>
  );
}