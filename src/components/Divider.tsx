import React from "react";

const Divider = ({ msg }) => {
  return (
    <span className="relative flex justify-center">
      <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"></div>

      <span className="relative z-10 bg-white px-6" style={{ margin: "1rem" }}>
        {msg}
      </span>
    </span>
  );
};

export default Divider;
