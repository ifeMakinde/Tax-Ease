import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

function StepsItem({ index, profileHead, stepDetails }) {
  const desktopPosition =
    index == 0
      ? "lg:ml-[10%]"
      : index == 1
      ? "lg:ml-16 lg:mt-20"
      : index == 2
      ? "lg:ml-16 lg:mb-20 lg:pr-10 "
      : "";

  return (
    <div
      className={`relative flex items-center flex-col top-15 z-10 max-w-[320px] ${desktopPosition} `}
    >
      <div className="w-16 h-16 rounded-full bg-emerald-100 grid place-items-center font-bold text-lg">{`0${
        index + 1
      }`}</div>

      <h3 className="mt-4 text-lg font-semibold">{profileHead}</h3>
      <p className="mt-2 text-[#444] text-sm text-center  ">{stepDetails}</p>
    </div>
  );
}

export default StepsItem;
