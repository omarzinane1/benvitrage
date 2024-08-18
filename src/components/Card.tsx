import React, { FC } from "react";

interface CardProps {
  frontContent: any;
  backContent: any;
}

const Card: FC<CardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card w-full h-96">
      <div className="flip-card-inner ">
        <div className="flip-card-front rounded-lg">{frontContent}</div>
        <div className="flip-card-back rounded-lg">{backContent}</div>
      </div>
    </div>
  );
};

export default Card;
