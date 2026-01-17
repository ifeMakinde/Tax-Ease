import {
  Calculator,
  FileText,
  BellRing,
  ChartLine,
  FileUp,
  Banknote,
  Headset,
  ClockCheck,
} from "lucide-react";
import React from "react";

import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

const complianceCards = [
  {
    icon: (
      <Calculator
        strokeWidth={1}
        size={38}
        color="white"
        className="bg-[#3B82F6] p-2 rounded-md"
      />
    ),
    head: "Smart Calculator",
    paragraph: "Instant tax calculations with all 2026 reliefs applied",
    bg: "#E5F0FF",
  },

  {
    icon: (
      <FileText
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#22C55E] p-2 rounded-md"
      />
    ),
    head: "Document Generator",
    paragraph: "Auto-generate tax returns and compliance forms",
    bg: "#EEFDF3",
  },

  {
    icon: (
      <BellRing
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#F59E0B] p-2 rounded-md"
      />
    ),
    head: "Deadline Reminders",
    paragraph: "Never miss a filing date with smart alerts",
    bg: "#FEF8DE",
  },

  {
    icon: (
      <ChartLine
        strokeWidth={1}
        size={38}
        color="white"
        className="bg-[#A855F7] p-2 rounded-md"
      />
    ),
    head: "Tax planning",
    paragraph: "Optimize your tax position year-round",
    bg: "#F6EEFF",
  },

  {
    icon: (
      <FileUp
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#EF4444] p-2 rounded-md"
      />
    ),
    head: "Export Reports",
    paragraph: "Download PDF reports for your records",
    bg: "#FEEAEA",
  },

  {
    icon: (
      <Banknote
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#6366F1] p-2 rounded-md"
      />
    ),
    head: "Multi-Currency",
    paragraph: "Handle foreign income with ease",
    bg: "#E7ECFF",
  },

  {
    icon: (
      <ClockCheck
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#14B8A6] p-2 rounded-md"
      />
    ),
    head: "History Tracking",
    paragraph: "Access all previous calculations anytime",
    bg: "#EAFCF8",
  },

  {
    icon: (
      <Headset
        size={38}
        strokeWidth={1}
        color="white"
        className="bg-[#EC4899] p-2 rounded-md"
      />
    ),
    head: "Expert Support",
    paragraph: "Get help from tax professionals",
    bg: "#FCEDF5",
  },
];

function ComplianceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 m-auto px-3 lg:px-0">
      {complianceCards.map((card, index) => {
        const cardBg = card.bg;

        return (
          <Card
            key={index}
            className={`px-10 py-4 pl-3 border-0 gap-2`}
            style={{ backgroundColor: cardBg }}
          >
            <CardHeader className="p-0">{card.icon}</CardHeader>
            <CardTitle className="text-lg font-semibold p-0">
              {card.head}
            </CardTitle>
            <CardDescription className={`max-w-70`}>
              {card.paragraph}
            </CardDescription>
          </Card>
        );
      })}
    </div>
  );
}

export default ComplianceCards;
