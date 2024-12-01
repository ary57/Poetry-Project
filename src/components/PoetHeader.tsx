import React from "react";
import { getImage, getFullDesc } from "../data/dataFunctions";

const PoetHeader = ({ name }) => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                {name}
              </h2>

              <p className="mt-4 text-gray-700">{getFullDesc(name)}</p>
            </div>
          </div>

          <div>
            <img src={getImage(name)} className="object-scale-down" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PoetHeader;
