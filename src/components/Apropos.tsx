import React from "react";
import Image from "next/image";
import Link from "next/link";
import Heading from "./Heading";
import {
  Award,
  CheckSquare,
  FileText,
  RefreshCw,
  Shield,
  Smile,
  Star,
  ThumbsUp,
} from "lucide-react";

const Apropos = () => {
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
          <h1 className="text-4xl font-bold text-white">Qui Sommes-nous ?</h1>
          <div className="text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <span>Qui Sommes-nous ?</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="flex lg:flex-row flex-col justify-between w-full h-screen">
          <div className="flex flex-col gap-3 lg:w-1/2">
            <div>
              <div className="flex items-center gap-2">
                <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
                <h4 className="text-lg font-medium">Qui Sommes-nous ?</h4>
              </div>
              <Heading title="Menuiserie Aluminium Personnalisée pour votre espace" />
            </div>
            <div className="flex flex-col gap-5">
              <p>
                Benvitrage est une entreprise marocaine pionnière qui a su développer
                un savoir-faire imbattable dans le domaine de la menuiserie
                Aluminium. En effet, la satisfaction et le confort de nos
                clients sont primordiaux. Nous fabriquons, par excellence, un
                ensemble de menuiserie Aluminium : Porte et fenêtre coulissante,
                Châssis à frappe, Volet roulant, Garde-corps, Habillage de
                façade en panneau composite, Mur rideau, Pergola Bioclimatique,
                Cloison Amovible, Système Accordéon, etc., qui ajoutent une
                touche spéciale à votre habitation personnelle ou
                professionnelle.
              </p>
              <p>
                L’esthétique, la performance et la durabilité sont les critères
                pris en considération pour le bénéfice du client et sa
                satisfaction totale. Benvitrage s’efforce de joindre la meilleure
                qualité avec l’innovation tout en respectant les règles de
                l’environnement. La confiance et la fidélité des clients, ainsi
                que les moyens humains et techniques dont Benvitrage dispose, lui
                permettent de pénétrer le marché national.
              </p>
            </div>
          </div>
          <div className="lg:flex flex-col gap-4 lg:visible hidden">
            <Image src="/alum2.png" alt="Image 1" width={500} height={500} />
            <Image src="/alum2.png" alt="Image 2" width={500} height={500} />
          </div>
        </div>
        <div className="lg:relative flex items-start h-screen">
          <div className="lg:bg-slate-600 w-full py-10 h-96">
            <div className="grid lg:grid-flow-col justify-center items-center lg:grid-cols-4 grid-cols-1 gap-4 w-full">
              <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                <Smile size={40} color="#4CAF50" />{" "}
                <div className="text-center">
                  <h4 className="font-bold text-white text-4xl">+1000</h4>
                  <div className="text-2xl text-white">Clients Satisfaits</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                <Shield size={40} color="#4CAF50" />{" "}
                <div className="text-center">
                  <h4 className="font-bold text-white text-4xl">100%</h4>
                  <div className="text-2xl text-white">Garantie</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-4">
                <FileText size={40} color="#4CAF50" />{" "}
                <div className="text-center">
                  <h4 className="font-bold text-white text-4xl">48h</h4>
                  <div className="text-2xl text-white">Etude et devis</div>
                </div>
              </div>
              <div className="flex lg:flex-row flex-col justify-center3 items-center gap-4">
                <CheckSquare size={40} color="#4CAF50" />{" "}
                <div className="text-center">
                  <h4 className="font-bold text-white text-4xl">+1100</h4>
                  <div className="text-2xl text-white">Projets Réalisés</div>
                </div>
              </div>
            </div>
            <div className="lg:absolute flex lg:flex-row lg:mt-0 mt-12 flex-col justify-between gap-5 lg:w-[80%] p-6 bg-stone-50 lg:left-28 lg:top-52">
              <div className="flex flex-col gap-4 lg:w-1/2">
                <div>
                  <div className="flex items-center gap-2">
                    <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
                    <h4 className="text-lg font-medium">
                      Message de notre directeur
                    </h4>
                  </div>
                  <Heading title="à notre clientèle" />
                </div>
                <p>
                  Nous mettons notre expertise et notre savoir-faire en pratique
                  pour vous assurer des produits de haute qualité.Votre
                  satisfaction nous tient à coeur et vos exigences sont nos
                  priorités.
                </p>
              </div>
              <div className="">
                <Image
                  src={"/alum2.png"}
                  alt={"directeur"}
                  width={600}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" flex lg:flex-row flex-col lg:mt-0 mt-72 justify-between lg:items-center items-start gap-4 p-6">
          <div>
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Notre mission</h4>
            </div>
            <Heading title="Notre raison d'être." />
          </div>
          <div className="lg:w-1/2">
            <p>
              Chez Benvitrage, nous développons des solutions qui atteignent des
              performances optimales à l’aide de nos produits de haute qualité.
              Nous offrons des gammes de produits diversifiées et sur mesure
              selon les besoins et exigences de nos clients. Notre engagement,
              professionnalisme et persévérance sont des facteurs fondamentaux
              dans le travail quotidien de notre équipe.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-flow-col lg:h-screen lg:grid-cols-5 grid-cols-1 w-full gap-3">
          <div className="flex flex-col justify-center items-center gap-4">
            <Award size={40} color="#4CAF50" />
            <h1>Expérience</h1>
            <p className="text-center">
              Possédant 20 ans d’expérience, nous contribuons à l’enrichissement
              et à la réussite de nos projets grâce à la diversité de nos
              savoir-faire et compétences.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <RefreshCw size={40} color="#4CAF50" />
            <h1>Flexibilité</h1>
            <p className="text-center">
              Nous sommes ouverts au changement. Nous continuons à développer
              notre activité et nous veillons à l’adaptabilité et la flexibilité
              de notre organisation.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Star size={40} color="#4CAF50" />
            <h1>Qualité</h1>
            <p className="text-center">
              Notre personnel hautement qualifiés met leur savoir-faire à votre
              service. Nous visons l’excellence et nous proposons une expertise
              sur mesure qui dépasse vos attentes.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <Shield size={40} color="#4CAF50" />
            <h1>Sécurité</h1>
            <p className="text-center">
              Nous veillons à préserver nos clients de tout danger. Nos experts
              exploitent leurs connaissances afin de fournir le meilleur service
              à nos clients.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <ThumbsUp size={40} color="#4CAF50" />
            <h1>Réputation</h1>
            <p className="text-center">
              Depuis sa création en 2001, l’entreprise connaît une forte
              croissance, bénéficiant d’un bouche-à-oreille très positif, lié en
              particulier à l’excellence de sa relation client.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Apropos;
