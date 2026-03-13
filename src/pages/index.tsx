import Head from "next/head";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Learning } from "@/sections/Learning";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Senanur Gerçek | Frontend Developer & Digital Experience Creator</title>
        <meta name="description" content="Premium luxury frontend portfolio of Senanur Gerçek. Crafting elegant web interfaces with Next.js and Tailwind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Learning />
        <Contact />
      </main>
      
      <Footer />
    </>
  );
}
