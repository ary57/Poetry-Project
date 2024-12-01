import React from "react";
import { v4 as uuidv4 } from "uuid";
import PoemCard from "../components/PoemCard";

const PoemsLayout = ({ poems }) => {
  return (
    <div className="grid grid-cols-4 gap-4 md:container md:mx-auto" style={{ marginBottom: "2rem" }}>
      {poems.map((poem) => (
        <PoemCard key={uuidv4()} poem={poem} />
      ))}
    </div>
  );
};

export default PoemsLayout;
