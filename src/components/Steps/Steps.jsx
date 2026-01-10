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
    <section className="my-20 ">
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

      {/* Visual */}
      <div className="relative min-h-100">
        {/* Decorative SVG path (desktop only) */}
        <img
          src={StepsPath}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-auto z-0 hidden lg:block"
        />

        {/* Steps */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {steps.map((step, index) => (
            <StepsItem key={index} index={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}

// function Steps() {
//   return (
//     <section className="mb-20 mt-20 p-2">
//       <div className=" text-center mb-8">
//         <h3 className="text-[26px] lg:text-3xl font-semibold mb-2">
//           From confused to compliant in 3 steps.
//         </h3>
//         <p className="text-[14px] lg:text-base">
//           Our intelligent system guides you through the entire tax calculation
//           process with precision and ease
//         </p>
//       </div>

//       <div
//         className="grid grid-cols-3 gap-8 relative"
//         style={{
//           backgroundImage: `url(${bgImage})`,
//           height: "40vh",
//           width: "100%",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {steps.map((steps, index) => (
//           <Card className="bg-transparent absolute top-8 ">
//             <CardHeader>{`0${index + 1}`}</CardHeader>
//             <CardTitle>{steps.profileHead}</CardTitle>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// }

export default Steps;
