import { Suspense } from "react";
import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";

const Navbar = dynamic(() => import("../sections/Navbar"));
const Footer = dynamic(() => import("../sections/Footer"));
const Welcome = dynamic(() => import("../sections/Home"));
const Gallery = dynamic(() => import("../sections/Gallery"));
const Mint = dynamic(() => import("../sections/Mint"));
const About = dynamic(() => import("../sections/About"));
const Wallet = dynamic(() => import("../sections/Wallet"));

const Home: NextPage = () => {
  return (
    <Suspense>
      <Head>
        <title>Narcos Presale</title>
      </Head>
      <Navbar />
      <Welcome />
      <Gallery />
      <Mint />
      <About />
      <Wallet />
      <Footer />
    </Suspense>
  );
};

export default Home;
