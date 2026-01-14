import { Check } from "lucide-react";
import React from "react";
import freelancer from "@/assets/freelancers.png";

const icon = (
  <Check
    color="#10B981"
    size={38}
    strokeWidth={2}
    className="p-2 rounded-md bg-[#ECFDF5]"
  />
);

const freelanceFeatures = [
  {
    icon,
    head: " WHT Credit tracking",
    paragraph:
      "Automatically calculate and claim withholding tax credits from client payments ",
  },
  {
    icon,
    head: " Foreign income adjustments",
    paragraph:
      " Appky the 5% tax credit for foreign currency earnings automatically",
  },
  {
    icon,
    head: " Multi currency support",
    paragraph:
      " Convert USD,GBP,EUR earning automatically using offical CBN rates",
  },
];

function Freelancers() {
  return (
    <div className="py-8 px-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <div className="">
        <h2 className="text-[22px] lg:text-[24px] font-semibold pb-3  ">
          Freelancers & Remote Workers
        </h2>

        <p className="text-[14px] lg:text-base max-w-170 lg:max-w-150">
          Track WHT credit and foreign income adjustments seamlessly. Our
          platform understands the complexities of cross border payments and
          multi-currency earnings
        </p>

        <ul className=" mt-4 flex flex-col justify-baseline gap-3">
          {freelanceFeatures.map((features, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="">{features.icon}</span>
              <span>
                <h4 className="font-semibold">{features.head}</h4>
                <p className="text-[14px] max-w-100">{features.paragraph}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* freelncer image */}
      <div className="w-full m-auto">
        <img
          src={freelancer}
          alt=""
          className="w-full lg:w-[80%] object-cover object-center"
        />
      </div>
    </div>
  );
}

export default Freelancers;
