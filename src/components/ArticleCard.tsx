// components/ArticleCard.tsx
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface ArticleCardProps {
  title: string;
  description: string;
  date: string;
  imageSrc: string;
  link: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  description,
  date,
  imageSrc,
  link,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-500 hover:scale-105">
      <Image
        src={imageSrc}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-row justify-between items-center">
          <div className="text-sm text-gray-500">{date}</div>
          <Link
            key={link}
            href={`/${link}`}
            className="bg-blue-600 text-white text-lg font-bold rounded-full h-10 w-10 flex items-center justify-center hover:bg-blue-700 transition duration-300"
          >
            +
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
