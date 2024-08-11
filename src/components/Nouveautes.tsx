import Link from "next/link";
import React from "react";
import Image from "next/image";
import ArticleCard from "@/components/ArticleCard";

const Nouveautes = () => {
  const articles = [
    {
      title: "Les 5 points forts de l'aluminium!",
      description:
        "L’aluminium s’adapte à toutes les ouvertures, en le choisissant, vous optez pour un matériau.",
      date: "9 JUIN 2021",
      imageSrc: "/alum2.png",
      link: "pointsforts",
    },
    {
      title: "Isolation thermique",
      description:
        "Certains vitrages peuvent être plus vulnérables que d’autres, surtout si vous habitez un endroit plus.",
      date: "9 JUIN 2021",
      imageSrc: "/alum3.png",
      link: "pointsforts",
    },
  ];
  return (
    <div className="min-h-screen">
      <header className="relative w-full h-64">
        <Image
          src="/alum2.png"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="h-[500px]"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Nouveautés</h1>
          <div className=" text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <span>Nos Nouveautés</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              title={article.title}
              description={article.description}
              date={article.date}
              imageSrc={article.imageSrc}
              link={article.link}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Nouveautes;
