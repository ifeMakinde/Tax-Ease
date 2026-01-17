import React from "react";
import Accordions from "./Accordions";

function FAQs() {
  return (
    <section className="py-20" id="FAQ">
      <div className="text-center max-w-170 m-auto mb-10">
        <h2 className="text-[24px] lg:text-3xl font-semibold mb-3">
          Frequently Asked Questions
        </h2>
        <p className="text-[14px] lg:text-base  ">
          Everything you need to know about TaxEase NG
        </p>
      </div>

      <div>
        <Accordions />
      </div>
    </section>
  );
}

export default FAQs;
