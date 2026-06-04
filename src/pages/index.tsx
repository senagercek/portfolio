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

const siteTitle = "Senanur Gercek | Frontend Developer & UI-Focused Web Designer";
const siteDescription =
  "Frontend developer portfolio focused on responsive UI, clean web interfaces, and modern frontend development with React, Next.js, and Tailwind CSS.";
const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "") ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const siteUrl = configuredSiteUrl.replace(/\/$/, "");
const pageUrl = siteUrl || "/";
const previewImageUrl = siteUrl ? `${siteUrl}/og-image.png` : "/og-image.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#111111" />
        <link rel="canonical" href={pageUrl} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="tr_TR" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="Senanur Gercek Portfolio" />
        <meta property="og:image" content={previewImageUrl} />
        <meta property="og:image:secure_url" content={previewImageUrl} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Senanur Gercek frontend developer portfolio preview" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteTitle} />
        <meta name="twitter:description" content={siteDescription} />
        <meta name="twitter:image" content={previewImageUrl} />
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
