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
        size={40}
        color="white"
        className="bg-[#F59E0B] p-2 rounded-md"
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
        size={40}
        color="white"
        className="bg-[#10B981] p-2 rounded-md"
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
        size={40}
        color="white"
        className="bg-[#3B82F6] p-2 rounded-md"
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
    <section className="my-20 p-2">
      <div className=" text-center m-auto mb-16">
        <h3 className="text-[26px] lg:text-3xl font-semibold mb-3">
          The 2026 Reform is complex. Compliance shouldn't be.
        </h3>
        <p className="text-[14px] lg:text-base">
          Navigate Nigeria's latest tax changes with confidence. We've decoded
          the complexity so you don't have to.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {reformCard.map((card, index) => (
          <Card
            key={index}
            className="p-4 border-0 rounded-md"
            style={{ backgroundColor: card.color }}
          >
            <CardHeader className="">{card.icon} </CardHeader>
            <CardTitle className="text-[24px] ">{card.header}</CardTitle>
            <CardDescription>{card.paragraph}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}

export default Reform;
