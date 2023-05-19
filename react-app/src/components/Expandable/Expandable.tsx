import React, { useState } from "react";

interface Props {
  MaxChars: number;
}

const Expandable = ({ MaxChars }: Props) => {
  const [more, setMore] = useState(false);

  const handleMoreClick = () => {
    setMore(!more);
  };

  return (
    <>
      <button onClick={handleMoreClick}>More</button>
    </>
  );
};

export default Expandable;
