import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

function StepsItem({ index, profileHead, stepDetails }) {
  const desktopPosition =
    index == 0
      ? "lg:ml-12 lg:mb-20 lg:pr-10 "
      : index == 1
      ? "lg:ml-12 lg:mt-20"
      : index == 2
      ? "lg:ml-16 lg:mb-20 lg:pr-10 "
      : "";

  return (
    <div
      className={`relative flex items-center flex-col top-10 z-10 max-w-160 border rounded-xl p-4 transition-all ease-in-out duration-600 hover:scale-90 hover:shadow-md ${desktopPosition} `}
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
