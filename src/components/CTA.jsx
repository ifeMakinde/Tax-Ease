import React from "react";
import CTAimage from "@/assets/CTAimage.png";

function CTA() {
  return (
    <section className="py-20 bg-[#064E3B] rounded-3xl flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 gap-4 lg:gap-6">
      <div className="text-center max-w-150 m-auto mb-5 text-white px-4">
        <h2 className="text-[24px] lg:text-3xl font-semibold mb-3">
          Don't let tax anxiety ruin your year.
        </h2>
        <p className="text-[14px] lg:text-base  ">
          Join thousands of Nigerians mastering their tax compliance with
          TaxEase NG.
        </p>
      </div>

      <div className="w-full lg:w-[50%]">
        <img src={CTAimage} alt="cta-image" className="w-full lg:w-[70%]" />
      </div>
    </section>
  );
}

export default CTA;
