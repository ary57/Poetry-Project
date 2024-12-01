import React from "react";
import PoetCard from "../components/PoetCard";
import { v4 as uuidv4 } from "uuid";

const HomeLayout = ({ authors }) => {
  return (
    <div className="grid grid-cols-4 gap-4 md:container md:mx-auto">
      {authors.map((author) => (
        <PoetCard name={author} key={uuidv4()} />
      ))}
    </div>
  );
};

export default HomeLayout;
