import React, { useState } from "react";
import PoemModal from "./PoemModal"; // Import the modal
import { v4 as uuidv4 } from "uuid";

const PoemCard = ({ poem }) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <div>
      <a
        onClick={handleCardClick}
        className="group relative block h-64 sm:h-80 lg:h-96 cursor-pointer"
      >
        <span className="absolute inset-0 border-2 border-dashed border-black"></span>

        <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
            <h2 className="mt-4 text-xl font-medium sm:text-2xl">
              {poem.title}
            </h2>
          </div>

          <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
            <h3 className="mt-4 text-xl font-medium sm:text-2xl">
              {poem.title}
            </h3>

            {poem.lines.slice(0, 3).map((line) => (
              <p key={uuidv4()} style={{ fontFamily: "Garamond", fontSize: "1rem" }}>{line}</p>
            ))}
            ...

            <p className="mt-8 font-bold">Read more</p>
          </div>
        </div>
      </a>

      {/* Use the modal */}
      <PoemModal
        isOpen={isOpen}
        onClose={handleClose}
        title={poem.title}
        lines={poem.lines}
      />
    </div>
  );
};

export default PoemCard;
