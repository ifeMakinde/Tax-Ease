import React from "react";
import heroImage from "../assets/hero.png";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Info, MoveRight } from "lucide-react";
import Btn from "../Btn.jsx";

const date = new Date().getFullYear();

function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between lg:justify-evenly gap-8 lg:gap-5 p-2 mt-12 mb-12 ">
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

        <p className="mb-3 text-[14px] lg:text-base ">
          Find out exactly what you owe, claim your exemptions, and get a
          step-by-step compliance checklist in under 2 minutes. No jargon, just
          clarity.
        </p>

        <Btn>
          Get Started Now
          <span>
            <MoveRight size={38} />{" "}
          </span>
        </Btn>
      </div>

      {/* hero image */}
      <div className="w-full lg:w-[50%]">
        <img
          src={heroImage}
          alt="hero-image"
          className="w-full lg:w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Hero;
