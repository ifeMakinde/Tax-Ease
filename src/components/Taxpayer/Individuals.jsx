import { Check } from "lucide-react";
import React from "react";
import individuals from "@/assets/individuals.png";

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
    head: "CRA Maximization",
    paragraph:
      "Automatically calculate the higher of 1% of gross income or ₦200,000 plus 20% of gross income.",
  },
  {
    icon,
    head: "PAYE Verification",
    paragraph:
      "Cross-check your payslip deductions against the correct tax tables",
  },
  {
    icon,
    head: "Additional Income Tracking",
    paragraph:
      "Declare side income, rental income, or investment returns accurately.",
  },
];

function Indivduals() {
  return (
    <div className="py-8 px-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-6">
      <div className="">
        <h2 className="text-[22px] lg:text-[24px] font-semibold pb-3  ">
          Salary Earners & Individuals
        </h2>

        <p className="text-[14px] lg:text-base max-w-170 lg:max-w-150">
          Maximize your Consolidated Relief Allowance (CRA) and understand your
          PAYE obligations. Ensure your employer is withholding the correct
          amount.
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
          src={individuals}
          alt=""
          className="w-full lg:w-[80%] object-cover object-center"
        />
      </div>
    </div>
  );
}
export default Indivduals;
