import Button from "@/components/Button";
import Card from "@/components/Card";
import FloatingButtons from "@/components/FloatingButtons";
import Heading from "@/components/Heading";
import MovingBorderButton from "@/components/MovingBorderDemo";
import { StickyScrollRevealDemo } from "@/components/NosServices";
import PricingCard from "@/components/PricingCard";
import Process from "@/components/Process";
import RightSection from "@/components/RightSection";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/constants/testimonials";
import { ArrowRightCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const images = ["/alum2.png", "/bg2.png", "/alum3.png"];
  /**
   * backend contant
   */
  const backend1 = (
    <div className="flex flex-col justify-start items-start gap-4 p-6 pt-10">
      <span>O Porte</span>
      <span>O Fenêtre coulissante</span>
      <span>O Porte fenêtres coulissante</span>
      <span>O Châssis à frappe</span>
      <Link
        href={"/produits"}
        className="text-center p-3 bg-sky-600 border-4 border-dashed border-blue-500 hover:bg-sky-400"
      >
        En savoir plus
      </Link>
    </div>
  );
  const backend2 = (
    <div className="flex flex-col justify-start items-start gap-4 p-6 pt-10">
      <span>O Volet roulant</span>
      <span>O Garde-corps en verre</span>
      <span>O trempé ou feuilleté</span>
      <span>O Portail</span>
      <Link
        href={"/produits"}
        className="text-center p-3 bg-sky-600 border-4 border-dashed border-blue-500 hover:bg-sky-400"
      >
        En savoir plus
      </Link>
    </div>
  );
  const backend3 = (
    <div className="flex flex-col justify-start items-start gap-4 p-6 pt-10">
      <span>O Mur Rideau</span>
      <span>O Habillage de façade en</span>
      <span>tôle en aluminium</span>
      <span>O Brise soleil</span>
      <Link
        href={"/produits"}
        className="text-center p-3 bg-sky-600 border-4 border-dashed border-blue-500 hover:bg-sky-400"
      >
        En savoir plus
      </Link>
    </div>
  );
  const backend4 = (
    <div className="flex flex-col justify-start items-start gap-4 p-6 pt-10">
      <span>O Cloison amovible</span>
      <span>O Système accordéon en Verre</span>
      <span>O Pergola Bioclimatique</span>
      <span>O Store</span>
      <Link
        href={"/produits"}
        className="text-center p-3 bg-sky-600 border-4 border-dashed border-blue-500 hover:bg-sky-400"
      >
        En savoir plus
      </Link>
    </div>
  );
  /**
   * frontEnd contant
   */
  const front1 = (
    <div className="relative rounded-lg h-full overflow-hidden shadow-lg">
      <Image
        src="/alum2.png"
        alt="fornt1"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
        <h3 className="text-center">Ouverture</h3>
      </div>
    </div>
  );
  const front2 = (
    <div className="relative rounded-lg h-full overflow-hidden shadow-lg">
      <Image
        src="/alum2.png"
        alt="fornt1"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
        <h3 className="text-center">Ouvrage de protection</h3>
      </div>
    </div>
  );
  const front3 = (
    <div className="relative rounded-lg h-full overflow-hidden shadow-lg">
      <Image
        src="/alum2.png"
        alt="fornt1"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
        <h3 className="text-center">Traitement de façade</h3>
      </div>
    </div>
  );
  const front4 = (
    <div className="relative rounded-lg h-full overflow-hidden shadow-lg">
      <Image
        src="/alum2.png"
        alt="fornt1"
        width={500}
        height={500}
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white p-4">
        <h3 className="text-center">Aménagement et décoration</h3>
      </div>
    </div>
  );

  return (
    <div className="overflow-x-hidden antialiased">
      {/* Home section */}
      <section
        id="home"
        className="relative flex justify-center items-center h-[100vh] lg:mt-12 mt-16"
      >
        {/* <video
          controls
          autoPlay
          loop
          muted
          poster="/path/to/poster.jpg"
          className="absolute top-0 left-0 right-0 bottom-0 -z-50 w-full h-full object-cover opacity-50"
        >
          <source src="/védio/Editor.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la balise vidéo.
        </video> */}
        <figure className="bubble w-72 md:w-96 lg:w-[520px] h-72 md:h-96 bg-indigo-600 top-16 md:top-12 lg:top-16 -left-20 md:-left-32 lg:-left-40" />
        <figure className="bubble w-72 md:w-96 lg:w-[430px] h-72 md:h-96 bg-sky-600 bottom-16 md:bottom-24 lg:bottom-44 -right-10 md:-right-16 lg:-right-20" />
        <div className="container flex flex-col text-center space-y-8 md:space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-teal-400 hover:text-black shadow-md transition-all">
              Aluminium Professionnel
              <ArrowRightCircle className="inline ml-1 w-4 h-4" />
            </p>
            <Heading title="Plus de 20 ans d'expérience" />
            <p className="max-w-[40rem] sm:max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
              Nous offrons des gammes de produits diversifiées et sur mesure
              selon les besoins et exigences de nos clients. Notre engagement,
              professionnalisme et persévérance sont des facteurs fondamentaux
              dans le travail quotidien de notre équipe.
            </p>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Link href="/contact" passHref>
                <MovingBorderButton text={"Demande de devis"} />
              </Link>
              <Link href="#pricing">
                <Button variant="outline">
                  Nos Produits <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Home section */}
      {/* Clients section */}
      <section className="flex justify-center items-center min-h-screen container py-12">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col justify-start items-start">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Produits & Services</h4>
            </div>
            <Heading title="Découvrez nos produits en un clic !" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Card frontContent={front1} backContent={backend1} />
            <Card frontContent={front2} backContent={backend2} />
            <Card frontContent={front3} backContent={backend3} />
            <Card frontContent={front4} backContent={backend4} />
          </div>
        </div>
      </section>
      {/** Notre expertise Section */}
      <section className="w-full min-h-screen gap-y-12 xl:gap-y-16 container lg:top-10 py-12 ">
        <div className="relative h-96">
          <div className="xl:absolute xl:-z-50 grid grid-cols-1 w-full xl:grid-cols-2 gap-10">
            <div className="xl:absolute xl:right-56">
              <div className="flex items-center gap-2">
                <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
                <h4 className="text-lg font-medium">20 ans d&expérience</h4>
              </div>
              <Heading title={"Notre expertise"} />
            </div>
            <Image src="/alum2.png" width={707} height={963} alt={"img"} />
          </div>
          <div className="xl:absolute xl:-z-10 xl:right-0 xl:top-24 md:w-[60%] grid grid-flow-row grid-rows-3 gap-0 p-4 lg:p-8 bg-slate-700">
            <PricingCard
              title="Aluminium Menuiserie"
              description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
              number="01"
              color="bg-red-600"
              monthlyPrice={0}
              annuallyPrice={0}
              features={[]}
            />
            <PricingCard
              title="Aluminium Menuiserie"
              description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
              number="02"
              color="bg-amber-500"
              monthlyPrice={0}
              annuallyPrice={0}
              features={[]}
            />
            <PricingCard
              title="Aluminium Menuiserie"
              description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
              number="03"
              color="bg-sky-500"
              monthlyPrice={0}
              annuallyPrice={0}
              features={[]}
            />
          </div>
        </div>
      </section>
      {/** End Notre expertise Section */}

      {/** Nos Services */}
      <section className="flex justify-center items-center h-screen container py-12">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col justify-start items-start ">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Services</h4>
            </div>
            <Heading title="répondent à vos besoins." />
          </div>
          <StickyScrollRevealDemo />
        </div>
      </section>
      {/** End Nos Services */}

      <section className="flex justify-center items-center container min-h-screen top-20 py-12">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Galerie</h4>
            </div>
            <Heading title="Découvrez nos projets !" />
          </div>
          <div className="flex-1">
            <RightSection />
          </div>
        </div>
      </section>
      {/* Features section */}
      <section
        id="features"
        className="flex flex-col justify-center items-center container min-h-screen"
      >
        {/* Part 1 */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <Image
            src="/bg2.png"
            width={1920}
            height={1080}
            alt="second banner"
            className="absolute -z-50 w-[1400px] h-[670px] top-0 left-0 opacity-5"
          />
          <div className="flex flex-col gap-4 items-center text-center lg:items-start lg:text-start">
            <Heading title="Rester en Contact." />
            <p className="lg:max-w-[34rem] leading-normal sm:text-lg sm:leading-8">
              Apsum dolor sit amet consectetur. Aliquam elementum elementum in
              ultrices. Dui maecenas ut eros turpis ultrices metus morbi aliquet
              vel.
            </p>
            <Button>Contactez-nous</Button>
          </div>
          <div>
            <video
              controls
              width="800"
              autoPlay
              loop
              muted
              poster="/path/to/poster.jpg"
            >
              <source src="/védio/Editor.mp4" type="video/mp4" />
              <source src="/path/to/video.webm" type="video/webm" />
              <source src="/path/to/video.ogv" type="video/ogg" />
              Votre navigateur ne supporte pas la balise vidéo.
            </video>
          </div>
        </div>
        {/* Part 1 */}
      </section>
      {/* Features section */}

      {/* Testimonials section */}
      <section
        id="testimonials"
        className="flex justify-center items-center container min-h-screen"
      >
        <div className="flex flex-col gap-8">
          <Heading title="Témoignages" isCentered />
          <h4 className="text-center">
            « Nous considérons nos clients comme des invités, à une fête où nous
            sommes les hôtes »
          </h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>
      {/* Testimonials section */}
      {/* Process section */}
      <section
        id="process"
        className="flex justify-center items-center min-h-screen container"
      >
        <div className="flex flex-col gap-8">
          <Heading title="COMMENT ÇA MARCHE" isCentered />
          <h4 className="text-center">
            « Ensemble pour trouver la meilleur solution avec le meilleur prix »
          </h4>
          <Process />
        </div>
      </section>
      {/** End Process section */}

      {/* Contact section */}
      <section
        id="contact"
        className="container min-h-screen flex justify-center items-center"
      >
        <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:items-start items-center gap-6">
          <div className="flex flex-col gap-4 text-center lg:text-start">
            <Heading title="Essayons notre service maintenant!" />
            <p className="max-w-[35rem] leading-normal text-lg">
              Nous offrons des gammes de produits diversifiées et sur mesure
              selon les besoins et exigences de nos clients. Notre engagement,
              professionnalisme et persévérance sont des facteurs fondamentaux
              dans le travail quotidien de notre équipe.
            </p>
          </div>
          <Button>
            Commencer
            <MoveRight className="w-4 h-4" />
          </Button>
        </div>
      </section>
      <section id="Map">
        <div></div>
      </section>

      {/* Contact section */}
      <FloatingButtons />
    </div>
  );
}
