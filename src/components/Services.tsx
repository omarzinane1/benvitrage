import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

const Services = () => {
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
          <h1 className="text-4xl font-bold text-white">Nos Services</h1>
          <div className="text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <span>Nos Services</span>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-6">
        <div className="py-10 flex xl:flex-row flex-col w-full justify-between xl:items-start gap-20">
          <div className=" flex flex-col gap-6 xl:w-[70%]">
            <p>
              Découvrez l’ensemble des services qu’Benvitrage propose afin de vous
              satisfaire pleinement.
            </p>
            <div className="flex flex-col justify-start gap-6">
              <h1 className="text-3xl text-white font-extrabold">Conception</h1>
              <p>
                Nous concevons des solutions innovantes et des plans bien
                détaillés. Nous accordons une importance particulière à la
                conception, en tenant en compte des aspects esthétiques et
                pratiques de nos réalisations tout en adoptant des moyens de la
                technologie.
              </p>
              <div className="flex xl:flex-row flex-col gap-6">
                <Image
                  src={"/alum2.png"}
                  width={400}
                  height={200}
                  alt={"Ben Vitrage"}
                />
                <Image
                  src={"/alum2.png"}
                  width={400}
                  height={200}
                  alt={"Ben Vitrage"}
                />
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">
                  Fabrication
                </h1>
                <p>
                  Nous disposons d’un atelier spécialisé dans la menuiserie
                  aluminium et nous mettons au service de nos clients une
                  qualité de fabrication incomparable. En suivant l’évolution de
                  secteur de la menuiserie Aluminium, Nous avons pu développer
                  notre parc matériel en investissant dans l{"'"}achat des nouvelles
                  machines, ce qui nous permet d’intervenir très rapidement sur
                  les projets les plus complexes.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">Pose</h1>
                <p>
                  Notre personnel expérimenté effectue la pose de dispositif en
                  aluminium en respectant les normes afin de préserver la
                  sécurité de l’espace et des usagers. En fonction de la
                  configuration de l’espace, nous choisissons le type de pose
                  convenable (la pose en rénovation, la pose en applique, la
                  pose en tunnel, etc.). Durant cette phase, la prise des
                  précautions et mesures est cruciale pour assurer une pose
                  efficace. Nous disposons de l’équipement adéquat pour répondre
                  aux exigences techniques et esthétiques des installations.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="flex flex-col justify-start gap-6">
                <h1 className="text-3xl text-white font-extrabold">Conseil</h1>
                <p>
                  Notre expérience riche dans le conseil et l’accompagnement
                  nous permet de suivre efficacement le développement de vos
                  produits en vous impliquant à chaque étape du processus. Nous
                  vous mettons au centre de toute décision pour livrer un
                  produit conforme à vos exigences et besoins. Pour vous aider à
                  mieux choisir les systèmes de menuiserie qui vous conviennent,
                  nous vous assistons tout au long de votre lancement de
                  commandes en vous garantissant une fiabilité accrue de nos
                  services.
                </p>
                <div className="flex xl:flex-row flex-col gap-6">
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                  <Image
                    src={"/alum2.png"}
                    width={400}
                    height={200}
                    alt={"Ben Vitrage"}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8 items-center xl:w-[30%]">
            <div className="">
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

export default Services;
