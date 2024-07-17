import React, { FC } from "react";

interface CardProps {
  frontContent: string;
  backContent: string;
}

const Card: FC<CardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card w-[384px] h-[450px] lg:w-[300px] lg:h-[350px]">
      <div className="flip-card-inner ">
        <div className="flip-card-front rounded-lg">{frontContent}</div>
        <div className="flip-card-back rounded-lg">{backContent}</div>
      </div>
    </div>
  );
};

export default Card;
