import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(true);

  const toggle = () => {
    setStatus(!status);
    onClick();
  };

  if (status)
    return (
      <AiFillHeart
        onClick={() => {
          toggle();
        }}
        color="red"
        size="50"
      />
    );
  return (
    <AiOutlineHeart
      onClick={() => {
        toggle();
      }}
      size="50"
    />
  );
};

export default Like;
