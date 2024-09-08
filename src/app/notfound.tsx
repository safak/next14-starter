import React from "react";

function notfound() {
  return (
    <div>
      <div className="flex flex-col justify-between mt-24 mb-8">
        <div className="flex  justify-around mt-24 mb-8 text-[#192841] text-xl">
          404 Page not found
        </div>
        <div className="flex  justify-center  mb-8 text-[#192841] text-md">
          Looks like you are heading to the wrong page, Check again.
        </div>
        <div className="flex  justify-center  mb-8 text-[#192841] text-md">
          <button className="bg-[#192841] text-white w-48 rounded-lg p-4">
            Back to home page
          </button>
        </div>
      </div>
    </div>
  );
}

export default notfound;
