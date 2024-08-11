"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { link } from "fs";

const images: any = {
  Porte: "/alum2.png",
  "Fenêtre coulissante": "/alum.png",
  "Porte fenêtres coulissante": "/path-to-image-3.jpg",
  "Châssis à frappe": "/path-to-image-4.jpg",
};
interface OuvrageDetails {
  image: string;
  paragraphe: string;
}

type OuvragesType = {
  [key: string]: OuvrageDetails;
};

interface TraitementDetails {
  image: string;
  paragraphe: string;
}

type TraitementType = {
  [key: string]: TraitementDetails;
};

interface AmenagementDetails {
  image: string;
  paragraphe: string;
}

type AmenagementType = {
  [key: string]: AmenagementDetails;
};

interface AutreSolutionsDetails {
  image: string;
  paragraphe: string;
}

type AutreSolutionsType = {
  [key: string]: AutreSolutionsDetails;
};

const Ouvrages: OuvragesType = {
  Ouvrage: {
    image: "/alum.png",
    paragraphe:
      "Volet roulant Alumousse 45 plat, Alumousse Bombé 55, Volet roulant en aluminium extrudé",
  },
  "Garde-corps": {
    image: "/alum2.png",
    paragraphe:
      "En verre trempé ou feuilleté : Apparent, Encastré, avec boutons",
  },
  Portail: {
    image: "/alum3.png",
    paragraphe: "",
  },
};
/**
 *
 * @returns Traitement
 */
const Traitements: TraitementType = {
  "Mur Rideau": {
    image: "/alum.png",
    paragraphe: "Mur Rideau VEC, Capot Serreur, Trame Horizontale",
  },
  "Habillage de façade": {
    image: "/alum2.png",
    paragraphe: "Habillage de façade En tôle en aluminium",
  },
  "Brise soleil": {
    image: "/alum3.png",
    paragraphe: "",
  },
};
/**
 *
 * @returns Aménagement
 */
const Amenagements: AmenagementType = {
  "Cloison amovible LINK et SLIM": {
    image: "/alum.png",
    paragraphe: "Mur Rideau VEC, Capot Serreur, Trame Horizontale",
  },
  "Système accordéon": {
    image: "/alum2.png",
    paragraphe: "en Verre (CORTINA)",
  },
  "Pergola Bioclimatique": {
    image: "/alum3.png",
    paragraphe: "",
  },
  "Store Enroulable et vénitien": {
    image: "/alum3.png",
    paragraphe: "",
  },
  Tôle: {
    image: "/alum3.png",
    paragraphe: "avec motif en découpe Lazer",
  },
};
/**
 *
 * @returns Autre Solutions Details
 */
const AutreSolutions: AutreSolutionsType = {
  "Porte coulissante": {
    image: "/alum.png",
    paragraphe: "Automatique en verre trempé",
  },
  "Vitrine en Verre Trempé": {
    image: "/alum2.png",
    paragraphe: "",
  },
  "Cabine de Douche": {
    image: "/alum3.png",
    paragraphe: "",
  },
};

const Produits = () => {
  const [selectedMenu, setSelectedMenu] = useState("Porte");
  const [selectedMenu2, setSelectedMenu2] = React.useState(
    Object.keys(Ouvrages)[0]
  );
  const [selectedMenu3, setSelectedMenu3] = React.useState(
    Object.keys(Traitements)[0]
  );
  const [selectedMenu4, setSelectedMenu4] = React.useState(
    Object.keys(Amenagements)[0]
  );
  const [selectedMenu5, setSelectedMenu5] = React.useState(
    Object.keys(AutreSolutions)[0]
  );
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
          <h1 className="text-4xl font-bold text-white">Nos Produits</h1>
          <div className="text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <span>Nos Produits</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="py-10 flex xl:flex-row flex-col w-full justify-between xl:items-start gap-20">
          <div className=" flex flex-col gap-6 xl:w-[70%]">
            <div className="flex flex-col justify-start gap-6">
              <h1 className="text-3xl text-white font-extrabold">Ouverture</h1>
              <p>
                Nous disposons d’une collection de modèles classiques qui vous
                permettront d’équiper votre espace avec les matériaux les plus
                adaptés à vos exigences. Nos produits offrent une ouverture
                maximale sur l’extérieur et garantissent un confort et une
                sécurité irréprochable. Afin de répondre à tous vos exigences,
                nous personnalisons vos portes ou fenêtres selon la hauteur et
                la largeur de vos ouvertures.
              </p>
              <div className="flex xl:flex-row flex-col gap-6">
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div>
                    <img
                      src={images[selectedMenu]}
                      alt={selectedMenu}
                      style={{ width: "1200px", height: "auto" }}
                    />
                  </div>

                  <div
                    style={{ marginLeft: "20px" }}
                    className="flex flex-col justify-center items-start gap-3 w-full"
                  >
                    {Object.keys(images).map((menu) => (
                      <div
                        key={menu}
                        onClick={() => setSelectedMenu(menu)}
                        style={{
                          padding: "15px 20px",
                          marginBottom: "4px",
                          backgroundColor:
                            selectedMenu === menu ? "#2979FF" : "#4A5568",
                          color: "white",
                          cursor: "pointer",
                          width: "300px",
                        }}
                      >
                        {menu}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">
                  Ouvrage de protection
                </h1>
                <p>
                  Disponibles en plusieurs formes, couleurs et textures, les
                  ouvrages de protection que nous proposons sont spéciaux. Si
                  vous cherchez une protection maximale dans les conditions et
                  les températures les plus contrastés, nos matériaux sont faits
                  pour vous.
                </p>
                <p>
                  Alusa offre des ouvrages blindés et dotés de systèmes de
                  verrouillage, avec une impossibilité d’accès grâce à des
                  propriétés de résistance aux chocs et à toute tentative
                  d’effraction.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      flexDirection: "row-reverse",
                    }}
                  >
                    <div>
                      <img
                        src={Ouvrages[selectedMenu2].image}
                        alt={selectedMenu2}
                        style={{ width: "1200px", height: "auto" }}
                      />
                    </div>

                    <div className="flex flex-col justify-center items-start gap-3 w-full">
                      {Object.keys(Ouvrages).map((menu2) => (
                        <div
                          key={menu2}
                          onClick={() => setSelectedMenu2(menu2)}
                          style={{
                            padding: "15px 20px",
                            marginBottom: "4px",
                            backgroundColor:
                              selectedMenu2 === menu2 ? "#2979FF" : "#4A5568",
                            color: "white",
                            cursor: "pointer",
                            width: "300px",
                          }}
                        >
                          {menu2}
                          <p>{Ouvrages[menu2].paragraphe}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">
                  Traitement de façade
                </h1>
                <p>
                  Alusa est spécialisé dans l’habillage façade en aluminium,
                  alliant à la fois la qualité, l’esthétisme et l’unicité du
                  produit final. Nos prestations sont adaptables à tout type de
                  besoins, que ce soit pour une construction de nouveaux
                  bâtiments ou une reconfiguration des structures existantes.
                  Nos façades se caractérisent par leur forte résistance aux
                  intempéries, au rayonnement UV et aux changements de
                  températures.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={Traitements[selectedMenu3].image}
                        alt={selectedMenu3}
                        style={{ width: "1200px", height: "auto" }}
                      />
                    </div>

                    <div
                      style={{ marginLeft: "20px" }}
                      className="flex flex-col justify-center items-start gap-3 w-full"
                    >
                      {Object.keys(Traitements).map((menu3) => (
                        <div
                          key={menu3}
                          onClick={() => setSelectedMenu3(menu3)}
                          style={{
                            padding: "15px 20px",
                            marginBottom: "4px",
                            backgroundColor:
                              selectedMenu3 === menu3 ? "#2979FF" : "#4A5568",
                            color: "white",
                            cursor: "pointer",
                            width: "300px",
                          }}
                        >
                          {menu3}
                          <p>{Traitements[menu3].paragraphe}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">
                  Aménagement et décoration
                </h1>
                <p>
                  Nous accordons une attention toute particulière aux choix et à
                  la qualité des finitions. Le projet de votre aménagement
                  devient le nôtre, l’équipe Alusa apporte tout son savoir-faire
                  nécessaire à sa bonne réalisation en respectant vos délais et
                  exigences.
                </p>
                <p>
                  Nous prenons en charge la rénovation et la décoration de votre
                  espace selon les spécificités de votre vision. En harmonie
                  avec la structure de votre espace, nous assurons une
                  décoration ludique et impressionnante.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={Amenagements[selectedMenu4].image}
                        alt={selectedMenu4}
                        style={{ width: "1200px", height: "auto" }}
                      />
                    </div>

                    <div
                      style={{ marginLeft: "20px" }}
                      className="flex flex-col justify-center items-start gap-3 w-full"
                    >
                      {Object.keys(Amenagements).map((menu4) => (
                        <div
                          key={menu4}
                          onClick={() => setSelectedMenu4(menu4)}
                          style={{
                            padding: "15px 20px",
                            marginBottom: "4px",
                            backgroundColor:
                              selectedMenu4 === menu4 ? "#2979FF" : "#4A5568",
                            color: "white",
                            cursor: "pointer",
                            width: "300px",
                          }}
                        >
                          {menu4}
                          <p>{Amenagements[menu4].paragraphe}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">
                  Autre Solutions
                </h1>
                <p>
                  Nos solutions sont esthétiques et peuvent-être réalisées
                  suivant une variété de designs. Nous vous proposons des
                  modèles permettant une adaptation facile aux différentes
                  configurations et à tous vos besoins. Nos professionnels
                  chevronnés, dotés d'une expérience riche dans le domaine, sont
                  les mieux placés pour vous conseiller et guider votre choix
                  des matériaux et des options techniques.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <img
                        src={AutreSolutions[selectedMenu5].image}
                        alt={selectedMenu5}
                        style={{ width: "1200px", height: "auto" }}
                      />
                    </div>

                    <div
                      style={{ marginLeft: "20px" }}
                      className="flex flex-col justify-center items-start gap-3 w-full"
                    >
                      {Object.keys(AutreSolutions).map((menu5) => (
                        <div
                          key={menu5}
                          onClick={() => setSelectedMenu5(menu5)}
                          style={{
                            padding: "15px 20px",
                            marginBottom: "4px",
                            backgroundColor:
                              selectedMenu5 === menu5 ? "#2979FF" : "#4A5568",
                            color: "white",
                            cursor: "pointer",
                            width: "300px",
                          }}
                        >
                          {menu5}
                          <p>{AutreSolutions[menu5].paragraphe}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 items-center xl:w-[30%]">
            <div>
              <ul className="flex flex-col justify-center items-center gap-3 w-full">
                <li className="bg-blue-600 p-5 w-80">
                  <a className="text-white" href="#">
                    Conception
                  </a>
                </li>
                <li className="bg-blue-600 p-5 w-80">
                  <a className="text-white" href="#">
                    Fabrication
                  </a>
                </li>
                <li className="bg-blue-600 p-5 w-80">
                  <a className="text-white" href="#">
                    Pose
                  </a>
                </li>
                <li className="bg-blue-600 p-5 w-80">
                  <a className="text-white" href="#">
                    Conseil
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 p-10 w-80 bg-slate-700">
              <div className="p-4 rounded-full bg-slate-800">
                <PhoneCall className="w-6 h-6 text-blue-500" />
              </div>
              <div className="flex flex-col justify-center items-center gap-8">
                <h1 className="text-center text-2xl text-white">
                  Avez-vous des questions? appelez-nous!
                </h1>
                <h1 className="text-amber-600 text-2xl font-extrabold">
                  05 00 00 00 13
                </h1>
                <h2 className="text-white">contact@alusa.ma</h2>
              </div>
            </div>
            <div className="flex flex-col justify-center items-start gap-8 p-10 w-80 bg-slate-700">
              <h1 className="text-white text-xl font-bold">A propos de nous</h1>
              <p className="text-white">
                Implantée à Agadir, capitale du sud marocain, ALUSA est une
                société spécialisée dans la fabrication et la vente de la
                menuiserie Aluminium destiné aux particuliers et aux
                professionnels.
              </p>
              <Link
                href={"#"}
                className="p-4 bg-blue-600 text-white text-center font-semibold hover:bg-emerald-300"
              >
                Télécharger notre brochure
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Produits;
