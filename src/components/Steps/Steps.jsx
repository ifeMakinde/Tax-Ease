import { Section } from "lucide-react";
import React from "react";
// import bgImage from "../assets/Vector 3.png";
// import { Card, CardHeader, CardTitle } from "./ui/card";
import StepsPath from "@/assets/Vector 3.svg";
import StepsItem from "@/components/Steps/StepsItem";

const steps = [
  {
    profileHead: "Select Profile",
    stepDetails:
      "Tell us if your a freelancer, SME, or Salary Earner. Our system customizes calculations based on your specific circumstances",
  },
  {
    profileHead: "Input Income",
    stepDetails:
      "Tell us if your a freelancer, SME, or Salary Earner. Our system customizes calculations based on your specific circumstances",
  },
  {
    profileHead: "Get compliant",
    stepDetails:
      "Tell us if your a freelancer, SME, or Salary Earner. Our system customizes calculations based on your specific circumstances",
  },
];

function Steps() {
  return (
    <section className="my-20">
      {/* Header */}
      <div className="text-center max-w-150 m-auto mb-16">
        <h2 className="text-[26px] lg:text-3xl font-semibold mb-3">
          From confused to compliant in 3 steps.
        </h2>
        <p className="text-[14px] lg:text-base  ">
          Our intelligent system guides you through the entire tax calculation
          process with precision and ease.
        </p>
      </div>

      <div className="">
        {/* Decorative SVG path (desktop only) */}

        {/* Steps */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-4">
          {steps.map((step, index) => (
            <StepsItem key={index} index={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
