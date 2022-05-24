/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Navbar from "pagesComponents/Navbar";
import Header from "pagesComponents/Header";
import Footer from "pagesComponents/Footer";
import { Card } from "../src";

// sections
import SectionFeatures from "pagesComponents/Sections/SectionFeatures";
import SectionButton from "pagesComponents/Sections/SectionButton";
import SectionColorsPalette from "pagesComponents/Sections/SectionColorsPalette";
import SectionShadow from "pagesComponents/Sections/SectionShadow";
import SectionComponents from "pagesComponents/Sections/SectionComponents";
import SectionFramework from "pagesComponents/Sections/SectionFramework";
import SectionTestimonials from "pagesComponents/Sections/SectionTestimonials";
import SectionCommunity from "pagesComponents/Sections/SectionCommunity";

export default function Presentation() {
  return (
    <>
      <Head>
        <title>PHP 개발자에게 유용한 문서</title>
        <link rel="canonical" href="https://phpkr.dev" />
        <meta name="description" content="PHP 개발자에게 유용한 문서" />
        <meta name="keywords" content="php, laravel, ci, php annotated, php annotated monthly" />
      </Head>
      <Navbar shadow />
      <main className="relative">
        <Header />
        <Card shadow={false} className="bg-white -mt-20 md:-mt-48 mx-6 md:mx-12">
          <div className="container mx-auto px-4 z-20">
            <SectionFeatures />
            <SectionButton />
            <SectionColorsPalette />
            <SectionShadow />
            <SectionComponents />
            <SectionFramework />
            <SectionTestimonials />
            <SectionCommunity />
          </div>
          <img
            className="absolute w-full bottom-0 md:-bottom-40"
            src="/img/pre-footer.jpg"
            alt="bubbles"
          />
        </Card>
      </main>
      <Footer />
    </>
  );
}
