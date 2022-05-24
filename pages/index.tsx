/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

import Head from "next/head";
import Navbar from "pagesComponents/Navbar";
import Header from "pagesComponents/Header";
import Footer from "pagesComponents/Footer";
import { Card } from "../src";

// sections

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
      <main className="relative pt-4">
        <Card shadow={false} className="bg-white -mt-20 md:-mt-48 mx-6 md:mx-12">
          <div className="container mx-auto px-4 z-20">
            <span>ds</span>
          </div>
        </Card>
      </main>
      <Footer />
    </>
  );
}
