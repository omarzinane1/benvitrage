import Button from "@/components/Button";
import Card from "@/components/Card";
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
  return (
    <div className="overflow-x-hidden antialiased">
      {/* Home section */}
      <section id="home" className="relative top-0 lg:top-20">
        <Image
          src="/alum2.png"
          width={500}
          height={500}
          alt="test"
          className="absolute -z-50 w-full min-h-screen -top-20 left-0 opacity-50"
        />
        <figure className="bubble w-96 lg:w-[520px] h-96 bg-indigo-600 top-16 -left-40" />
        <figure className="bubble w-96 lg:w-[430px] h-96 bg-sky-600 bottom-16 md:bottom-44  -right-20 md:right-20" />
        <div className="container flex flex-col text-center space-y-12">
          <div className="flex flex-col items-center space-y-6">
            <p className="capitalize border border-slate-700 py-1 px-3 text-xs rounded-3xl cursor-pointer hover:border-sky-500 hover:bg-teal-400 hover:text-black shadow-md transition-all">
              Aluminium Professionnel
              <ArrowRightCircle className="inline ml-1 w-4 h-4" />
            </p>
            <Heading title="Plus de 20 ans d'expérience" />
            <p className="max-w-[46rem] leading-normal sm:text-lg sm:leading-8">
              Nous offrons des gammes de produits diversifiées et sur mesure
              selon les besoins et exigences de nos clients. Notre engagement,
              professionnalisme et persévérance sont des facteurs fondamentaux
              dans le travail quotidien de notre équipe.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/devis" passHref>
                <MovingBorderButton text={"Demande de devis"} />
              </Link>
              <Link href="#pricing">
                <Button variant="outline">
                  Nos Produits <MoveRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <Image
              src="/Hero-image.svg"
              width={500}
              height={370}
              alt="banner"
              className="mx-auto shadow-xl"
            />
          </div>
        </div>
      </section>
      {/* Home section */}
      <div className="relative container">
        {/* Clients section */}
        <section className="flex flex-col min-h-screen gap-y-12 lg:gap-y-16">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Produits & Services</h4>
            </div>
            <Heading title="Découvrez nos produits en un clic !" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            <Card frontContent="Front 1" backContent="Back 1" />
            <Card frontContent="Front 2" backContent="Back 2" />
            <Card frontContent="Front 3" backContent="Back 3" />
            <Card frontContent="Front 4" backContent="Back 4" />
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            <ThreeDCardDemo imageUrl="/alum.png" />
            <ThreeDCardDemo imageUrl="/bg2.png" />
            <ThreeDCardDemo imageUrl="/alum2.png" />
            <ThreeDCardDemo imageUrl="/alum2.png" />
          </div> */}
        </section>
        {/** Notre expertise Section */}
        <section className="w-full gap-y-12 lg:gap-y-16">
          <div className="relative md:h-screen">
            <div className="lg:absolute lg:-z-50 grid grid-cols-1 w-full lg:grid-cols-2 gap-10">
              <div className="lg:absolute lg:right-56">
                <div className="flex items-center gap-2">
                  <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
                  <h4 className="text-lg font-medium">20 ans d&expérience</h4>
                </div>
                <Heading title={"Notre expertise"} />
              </div>
              <Image src="/alum2.png" width={707} height={963} alt={"img"} />
            </div>
            <div className="lg:absolute lg:-z-10 lg:right-10 lg:top-24 lg:w-[50%] grid grid-flow-row grid-rows-3 gap-0 p-8 bg-slate-700">
              <PricingCard
                title="Aluminium Menuiserie"
                description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
                number="01"
                color="red-600"
                monthlyPrice={0}
                annuallyPrice={0}
                features={[]}
              />
              <PricingCard
                title="Aluminium Menuiserie"
                description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
                number="01"
                color="amber-500"
                monthlyPrice={0}
                annuallyPrice={0}
                features={[]}
              />
              <PricingCard
                title="Aluminium Menuiserie"
                description="Un savoir d’exception, des produits uniques et réalisés avec détermination. Alliant un savoir-faire exceptionnel aux technologies actuelles."
                number="01"
                color="sky-500"
                monthlyPrice={0}
                annuallyPrice={0}
                features={[]}
              />
            </div>
          </div>
        </section>
        {/** End Notre expertise Section */}

        {/** Nos Services */}
        <section className="flex flex-col gap-y-12 lg:gap-y-16">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Services</h4>
            </div>
            <Heading title="répondent à vos besoins." />
          </div>
          <StickyScrollRevealDemo />
        </section>

        {/** End Nos Services */}
        <section className="flex flex-col gap-y-12 lg:gap-y-16">
          <div className="flex flex-col justify-start items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-400 p-1 w-2 h-2 rounded-full"></div>
              <h4 className="text-lg font-medium">Nos Galerie</h4>
            </div>
            <Heading title="Découvrez nos projets !" />
          </div>
          <div className="flex-1">
            <RightSection />
          </div>
        </section>
        {/* Features section */}
        <section
          id="features"
          className="flex flex-col items-center gap-y-12 md:gap-y-20 lg:gap-y-28"
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
                ultrices. Dui maecenas ut eros turpis ultrices metus morbi
                aliquet vel.
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
        <section id="testimonials" className="flex flex-col gap-8">
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
        </section>
        {/* Testimonials section */}
        {/* Process section */}
        <section id="process" className="flex flex-col gap-8">
          <Heading title="COMMENT ÇA MARCHE" isCentered />
          <h4 className="text-center">
            « Ensemble pour trouver la meilleur solution avec le meilleur prix »
          </h4>
          <Process />
        </section>
        {/** End Process section */}

        {/* Contact section */}
        <section id="contact">
          <div className="bg-slate-800 rounded-lg px-8 lg:px-24 py-8 lg:py-12 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-col gap-4 text-center lg:text-start">
              <Heading title="Essayons notre service maintenant!" />
              <p className="max-w-[35rem] leading-normal text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repudiandae possimus dicta dolor recusandae. Eaque vel labore
                iusto asperiores. Qui soluta dolore sint accusamus pariatur
                incidunt, illum officia ab voluptatem cum?
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
      </div>
    </div>
  );
}
