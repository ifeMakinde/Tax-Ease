import React from "react";
import heroImage from "../assets/Group 10.png";
import { Badge } from "./ui/badge";
import { Info } from "lucide-react";

const date = new Date().getFullYear();

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-baseline lg:justify-evenly gap-8 lg:gap-5 mt-8  mb-10 ">
      <div className="m-auto w-full lg:max-w-[50%] tracking-tight text-center lg:text-left ">
        <div className="flex justify-center items-center gap-1 mb-4 bg-[#ECFDF5] max-w-30% lg:w-10/25 rounded-xl transition-all hover:translate-y-1 ">
          <span>
            <Info strokeWidth={1} color="#10B981" />
          </span>
          <Badge className="pr-4 pl-0 py-2 bg-transparent text-[#10B981] rounded-xl font-semibold">
            Updated for {date} tax returns
          </Badge>
        </div>

        <h1 className="text-3xl lg:text-6xl font-semibold mb-3">
          Your Personal Guide to Nigeria's New Tax Laws.
        </h1>

        <p className="mb-3 text-[14px] lg:text-base -">
          Find out exactly what you owe, claim your exemptions, and get a
          step-by-step compliance checklist in under 2 minutes. No jargon, just
          clarity.
        </p>

        <button className="capitalize px-4 py-4 lg:px-6 lg:py-4 bg-[#10B981] rounded-lg text-white cursor-pointer">
          get started
        </button>
      </div>

      {/* hero image */}
      <div className="">
        <img src={heroImage} alt="hero-image" />
      </div>
    </section>
  );
}

export default Hero;
