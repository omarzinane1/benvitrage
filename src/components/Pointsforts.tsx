import React from "react";
import Image from "next/image";
import Link from "next/link";

const Pointsforts = () => {
  const specificDate = new Date(2024, 7, 11);
  return (
    <div className="bg-gray-50 min-h-screen">
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
          <div className="text-white mt-2">
            <Link href={"/"}>Home</Link> <span className="mx-2">{">"}</span>{" "}
            <Link href={"/nouveautes"}>Nouveautés</Link>
            <span className="mx-2">{">"}</span>
            <span>Les 5 points forts de l’aluminium!</span>
          </div>
        </div>
      </header>
      <main className="container p-6 mt-24">
        <header className="relative">
          <Image
            src="/alum2.png"
            alt="Aluminum Building"
            width={1920}
            height={1080}
            layout="responsive"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide">
              Sté <span className="uppercase">Benvitrage</span> sarl
            </h1>
          </div>
        </header>

        <div className="py-12 px-4 md:px-12 max-w-7xl mx-auto border-2">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              9 Juin 2021 · 403 Views · 0 Likes · Article
            </p>
          </div>

          <section className="mt-8 space-y-8">
            <article className="flex flex-col justify-start gap-3">
              <h2 className="text-3xl md:text-4xl font-bold mt-4">
                Les 5 points forts de l’aluminium!
              </h2>
              <p>
                L’aluminium s’adapte à toutes les ouvertures, en le choisissant,
                vous optez pour un matériau magnifique qui s’harmonise avec
                n’importe quel espace. Que ce soit pour une rénovation ou une
                nouvelle construction, il demeure idéal pour tous vox choix.
                Pour ceux qui préfèrent une vue imprenable vers l’extérieur et
                une excellente visibilité ou pour ceux qui cherchent la
                modernité et la robustesse, l’aluminium répond aux attentes et
                aux exigences les plus variées.
              </p>
            </article>
            <article>
              <h3 className="text-xl font-semibold text-blue-500">1- Longue durée de vie</h3>
              <p className="mt-2 text-gray-700">
                L’aluminium est très résistant et bénéficie d’une très longue
                longévité, et permet de réaliser des ouvrages dont l’entretien
                sera extrêmement minimal. Dans les conditions et les
                températures les plus extrêmes, les performances des matériaux
                restent toujours impeccables. Il s’agit donc d’un choix durable
                pour vos portes, fenêtres coulissantes et portes fenêtres
                coulissante, etc.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-blue-500">2- Un esthétisme</h3>
              <p className="mt-2 text-gray-700">
                Que votre espace soit ancien ou contemporain, les menuiseries en
                aluminium sont les meilleurs choix pour exhiber une performance
                et une élégance. Elles permettent de transformer vos maisons ou
                immeubles et faisant de vos façades et intérieurs des éléments
                de décoration attractifs. Vous avez un éventail de choix en ce
                qui concerne les couleurs, les formes, les types de produits
                pour composer votre profilé. L’avantage ultime de l’aluminium
                est les propositions sur mesure adaptées à votre besoin
                spécifique.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-blue-500">3- Facilité d’entretien</h3>
              <p className="mt-2 text-gray-700">
                L’aluminium est un matériau qui est facile à entretenir et ne
                nécessite aucun traitement particulier, il n’a pas besoin d’être
                peint ou verni. Une à deux fois par an, Il suffit de le nettoyer
                à l’eau avec une éponge douce, si nécessaire, vous pouvez se
                contenter d’utiliser un détergent doux et non agressif, afin de
                conserver l’aspect d’origine de votre matériau.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-blue-500">
                4- Respectueux de l’environnement
              </h3>
              <p className="mt-2 text-gray-700">
                L’aluminium est 100% recyclable et son recyclage consomme peu
                d’énergie. A chaque remodelage ou réutilisation, l’aluminium est
                récupéré pour engendrer une nouvelle matière première, dont la
                naissance d’un cercle vertueux. Grâce à la valeur des métaux
                récupérés à travers le processus, l’aluminium est économiquement
                rentable.
              </p>
            </article>

            <article>
              <h3 className="text-xl font-semibold text-blue-500">5- Une isolation</h3>
              <p className="mt-2 text-gray-700">
                Grâce à la finesse des matériaux d’aluminium, ils supportent
                tout vitrage lourd ou imposant. Ils intègrent les épaisseurs de
                verre pour vous protéger de tout bruit qui provient de
                l’extérieur. Ils vous offrent un confort incontournable et
                acoustique indispensable à votre style de vie.
              </p>
            </article>
          </section>
        </div>
        <div className="flex flex-col justify-start gap-4 mt-8">
          <h1 className="text-2xl font-bold">Tags:</h1>
          <Link href={""} className="p-3 text-black bg-slate-300 w-52">
            Menuiserie Aluminium
          </Link>
          <hr />
          <div className="flex flex-col justify-start gap-2">
            <Link href={""}>NEXT POST</Link>
            <h1 className="text-2xl font-bold">
              Les 5 points forts de l’aluminium!
            </h1>
          </div>
          <hr />
          <div className="flex flex-col justify-start gap-6">
            <h1 className="text-2xl font-bold">Related Posts</h1>
            <Image src="/alum2.png" alt={"alum2"} width={500} height={500} />
            <span className="font-semibold text-lg">Les 5 points forts de l’aluminium!</span>
            <div>{specificDate.toDateString()}</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Pointsforts;
