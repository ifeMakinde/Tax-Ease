import { Check } from "lucide-react";
import React from "react";
import business from "@/assets/small business.png";

const icon = (
  <Check
    color="#10B981"
    size={38}
    strokeWidth={2}
    className="p-2 rounded-md bg-[#ECFDF5]"
  />
);

const Features = [
  {
    icon,
    head: " Turnover-Based tax tiers",
    paragraph:
      "Automatic classification into correct tax bracket based on annual revenue ",
  },
  {
    icon,
    head: " VAT registration Guidance",
    paragraph:
      " Know exactly when you need to register for VAT and how to comply",
  },
  {
    icon,
    head: " CIT Optimization",
    paragraph:
      "Maximize dedution and apply all available reliefs for your business type ",
  },
];

function SmallBusiness() {
  return (
    <div className="py-8 px-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <div className="">
        <h2 className="text-[22px] lg:text-[24px] font-semibold pb-3  ">
          Small & Medium Enterprise
        </h2>

        <p className="text-[14px] lg:text-base max-w-170 lg:max-w-150">
          Determine VAT status and CIT liability based on turnover
          tiers.Navgigate the new #25M excepmtion threshold with confidence and
          precision
        </p>

        <ul className=" mt-4 flex flex-col justify-baseline gap-3">
          {Features.map((feature, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="">{feature.icon}</span>
              <span>
                <h4 className="font-semibold">{feature.head}</h4>
                <p className="text-[14px] max-w-100">{feature.paragraph}</p>
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* freelncer image */}
      <div className="w-full m-auto">
        <img
          src={business}
          alt=""
          className="w-full lg:w-[80%] object-cover object-center"
        />
      </div>
    </div>
  );
}

export default SmallBusiness;
