import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FAQsData = [
  {
    question: "Is this an official government tool?",
    answer:
      "No, TaxEase NG is an independent compliance assistant. However, our calculator is strictly programmed according to the  2026 Finance Act and the latest FIRS guidelines to ensure your results are accurate and legally compliant.",
  },
  {
    question: "Do I need to pay to check my tax status?",
    answer:
      "Not at all. The calculator and compliance checklist are 100% free. You can assess your liability, claim your reliefs, and view your personalized roadmap without paying a Kobo.",
  },
  {
    question: "My business earns under ₦25 Million do i still  need this ? ",
    answer:
      'Yes! While the 2026 reforms likely make you exempt from paying CIT and VAT, you are still legally required to file a "Nil Return" to stay active and avoid penalties. We guide you through that specific process.',
  },
  {
    question: "Is my financial data with the FIRS ?",
    answer:
      "Absolutely not. Your privacy is our priority. Your data is encrypted and processed locally to generate your report. We do not report your income or personal details to the government or any third parties.",
  },
  {
    question: "I work and earn remotely in Dollars. Does this cover me ?",
    answer:
      'Yes. The 2026 reforms introduced a "Forex Rebate" (a 5% tax credit) for digital export services. Our tool specifically checks for this and automatically reduces your tax liability if you qualify.',
  },
];

function Accordions() {
  return (
    <div className="m-auto max-w-250">
      {FAQsData.map((faq, index) => (
        <Accordion key={index} collapsible type="single">
          <AccordionItem
            value={`item-${index + 1}`}
            className="m-auto max-w-250 pb-2"
          >
            <AccordionTrigger className=" text-[18px] lg:text-[20px] font-medium hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-[14px]">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}

      {/* <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion> */}
    </div>
  );
}

export default Accordions;
