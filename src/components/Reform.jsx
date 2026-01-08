import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "./ui/card";
import { TriangleAlert, Globe, FileSpreadsheet } from "lucide-react";

const reformCard = [
  {
    icon: (
      <TriangleAlert
        strokeWidth={1}
        size={32}
        color="white"
        className="bg-[#F59E0B] "
      />
    ),
    header: " New SME Thresholds",
    paragraph:
      "Did you know businesses under ₦25M turnover are now tax-exempt? We help you prove it and stay compliant with documentation requirements.",
    color: "#FFF9EC",
  },

  {
    icon: (
      <Globe
        strokeWidth={1}
        size={32}
        color="white"
        className="bg-[#10B981] "
      />
    ),
    header: "Foreign Income Rules",
    paragraph:
      "Navigate the updated foreign income taxation policies. Understand your obligations for international earnings and cross-border transactions.",
    color: "#F9FFFC",
  },

  {
    icon: (
      <FileSpreadsheet
        strokeWidth={1}
        size={32}
        color="white"
        className="bg-[#3B82F6] "
      />
    ),
    header: "VAT & CIT Changes",
    paragraph:
      "Get clarity on the new VAT registration thresholds and Corporate Income Tax rates. Know exactly what applies to your business size.",
    color: "#E5F0FF",
  },
];

function Reform() {
  return (
    <section>
      <div className=" text-center mb-8">
        <h2 className="text-3xl font-semibold">
          The 2026 Reform is complex. Compliance shouldn't be.
        </h2>
        <p className="text-[14px] lg:text-base">
          Navigate Nigeria's latest tax changes with confidence. We've decoded
          the complexity so you don't have to.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {reformCard.map((card, index) => (
          <Card
            key={index}
            className="p-3 border-0 rounded-none"
            style={{ backgroundColor: card.color }}
          >
            <CardHeader className="p-0">{card.icon}</CardHeader>
            <CardTitle className="text-[24px] ">{card.header}</CardTitle>
            <CardDescription>{card.paragraph}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Reform;
