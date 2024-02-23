import React from "react";
import Links from "./components/Links";

export default function NavBar() {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <div className="text-white font-bold ">Logo</div>
        <div className="flex flex-col justify-around">
          <Links />
        </div>
      </div>
    </div>
  );
}
