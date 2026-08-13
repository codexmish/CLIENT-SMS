import React from "react";

interface HeadingProps {
  text: string;
}

const Heading = ({ text }: HeadingProps) => {
  return (
    <>
      <h2 className="text-4xl text-black font-popppins font-semibold text-center">
        {text}
      </h2>
    </>
  );
};

export default Heading;
