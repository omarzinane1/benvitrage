import React, { FC } from 'react';

interface CardProps {
  frontContent: string;
  backContent: string;
}

const Card: FC<CardProps> = ({ frontContent, backContent }) => {
  return (
    <div className="flip-card">
    <div className="flip-card-inner">
      <div className="flip-card-front">
        {frontContent}
      </div>
      <div className="flip-card-back">
        {backContent}
      </div>
    </div>
  </div>
  );
};

export default Card;
