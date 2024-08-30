import React from "react";
import Image from "next/image";

function loading() {
  return (
    <div>
      <div className="flex flex-row justify-center mt-24 mb-8">
        <Image src="/loading.gif" alt="loading" width={500} height={500} />
      </div>
    </div>
  );
}

export default loading;
