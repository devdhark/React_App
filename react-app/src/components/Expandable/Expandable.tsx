import React, { useState } from "react";
import styles from "./Expandable.module.css";

interface Props {
  children: string;
  MaxChars: number;
}

const Expandable = ({ children, MaxChars }: Props) => {
  const [more, setMore] = useState(false);

  const handleMoreClick = () => {
    setMore(!more);
  };

  const expandableText = () => {
    let text;
    if (!more) {
      text = children.substring(0, MaxChars) + "...";
    } else {
      text = children;
    }

    return (
      <p>
        {text}
        <button onClick={handleMoreClick}>{moreLessText()}</button>
      </p>
    );
  };

  const moreLessText = () => {
    if (!more) {
      return <p>More</p>;
    }
    return <p>Less</p>;
  };

  return <p>{expandableText()}</p>;
};

export default Expandable;
