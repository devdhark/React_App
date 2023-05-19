import React, { useState } from "react";
import styles from "./Expandable.module.css";

interface Props {
  MaxChars: number;
  children: string;
}

const Expandable = ({ MaxChars, children }: Props) => {
  const [more, setMore] = useState(false);

  const handleMoreClick = () => {
    setMore(!more);
  };

  const expandableText = () => {
    if (!more) {
      return <p>{children.slice(0, MaxChars)}</p>;
    }
    return children;
  };

  const moreLessText = () => {
    if (!more) {
      return <p>More</p>;
    }
    return <p>Less</p>;
  };

  return (
    <>
      {expandableText()}
      <button onClick={handleMoreClick}>{moreLessText()}</button>
    </>
  );
};

export default Expandable;
