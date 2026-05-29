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
        <title>Senanur Gercek | Frontend Developer & UI-Focused Web Designer</title>
        <meta
          name="description"
          content="Frontend developer portfolio focused on responsive UI, clean web interfaces, and modern frontend development with React, Next.js, and Tailwind CSS."
        />
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
