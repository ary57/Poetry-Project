import React from "react";
import { Link } from "react-router-dom";
import { getImage, getDesc } from "../data/dataFunctions";

const Card = ({ name }) => {
  return (
    <Link to={`poet/${name}`} className="group relative block bg-black h-64">
      <img
        alt=""
        src={getImage(name)}
        className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
      />
      <div className="relative p-4 sm:p-6 lg:p-8 h-full">
        <p className="text-sm font-medium uppercase tracking-widest text-pink-500"></p>

        <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

        {/* Description Container */}
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
          <p className="text-sm text-white">{getDesc(name)}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
