import Image from "next/image";
import React from "react";

interface sectionProps {
  onClick: () => void;
  section: string;
}

function Sectionblog({ onClick, section }: sectionProps) {
  return (
    <div>
      <div className="flex flex-col items-center justify-center shadow-normalComponent rounded-lg">
        <Image
          src={`/${section}.jpg`}
          alt="blog"
          width={200}
          height={200}
          className="rounded-lg "
        />
        <div
          className="text-2xl font-light my-4 text-[#5f7c7b] italic cursor-pointer"
          onClick={onClick}
        >
          {section}
        </div>
      </div>
    </div>
  );
}

export default Sectionblog;
