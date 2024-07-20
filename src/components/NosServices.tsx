"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const NosServices = [
  {
    title: "Conception",
    description:
      "Nous concevons des solutions innovantes et des plans bien détaillés. Nous accordons une importance particulière à la conception...",
      
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex  justify-between  text-white">
        <Image
          src="/alum2.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fabrication",
    description:
      "Nous disposons d’un atelier spécialisé dans la menuiserie aluminium et nous mettons au service de nos clients une qualité de fabrication incomparable...",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/alum.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Pose",
    description:
      "Notre personnel expérimenté effectue la pose de dispositif en aluminium en respectant les normes afin de préserver la sécurité de l’espace et des usagers...",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Conseil",
    description:
      "Notre expérience riche dans le conseil et l’accompagnement nous permet de suivre efficacement le développement de vos produits...",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-5 w-full bg-slate-800">
      <StickyScroll content={NosServices} />
    </div>
  );
}
