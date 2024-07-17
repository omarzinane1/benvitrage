import { Pricing } from "@/types/interfaces";
import { FC } from "react";
interface PricingCardProps extends Pricing {
  title: string;
  description: string;
  number: string;
  color: string;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  number,
  color,
}) => {
  return (
    <>
      <div className="flex flex-row p-4 gap-3">
        <div className={`bg-${color} p-10 text-white rounded-full flex items-center justify-center w-20 h-20`}>{number}</div>
        <div className="flex flex-col py-2">
          <h1 className="text-white">{title}</h1>
          <p className="text-[15px]">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PricingCard;
