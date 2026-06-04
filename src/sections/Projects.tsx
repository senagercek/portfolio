import React from "react";
import { Container } from "../components/Container";
import { SectionTitle } from "../components/SectionTitle";
import { ProjectCard } from "../components/ProjectCard";

export const Projects = () => {
  const primaryProjects = [
    {
      title: "Mindful Journey",
      category: "Wellbeing Platform",
      description: "A wellness-focused web experience designed to present guided practices, calm visual storytelling, and a clean journey through mindful content and membership offers.",
      image: "/mindful.png",
      liveUrl: "https://mindfuljourney.app/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/mindful-journey",
      tags: ["Next.js", "React", "Tailwind CSS", "REST API"],
    },
    {
      title: "SENORA E-Commerce",
      category: "Fashion Retail",
      description: "A premium fashion storefront created to elevate product presentation, support editorial merchandising, and deliver a refined shopping flow for a luxury-focused brand.",
      image: "/senora.png",
      liveUrl: "https://www.senorast.com/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/senora-ecommerce",
      tags: ["React", "Next.js", "Tailwind CSS", "E-Commerce UI"],
    },
    {
      title: "Cebinex Financial Dashboard",
      category: "Fintech Solution",
      description: "A data-driven financial dashboard focused on portfolio visibility, transaction clarity, and accessible analytics through a polished interface system.",
      image: "/cebinex-showcase-photoreal.png",
      liveUrl: "https://cebinex.com/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/cebinex-dashboard",
      tags: ["React", "React Query", "Tailwind CSS", "Dashboard UI"],
    },
  ];

  const additionalProjects = [
    {
      title: "Gece Aperatif & Market",
      category: "Mobile Delivery App",
      description: "A mobile commerce application designed for fast ordering of late-night snacks, drinks, and market essentials with a simple category structure and frictionless checkout flow.",
      image: "/gece-aperatif-market-showcase-premium.png",
      liveUrl: "https://geceaperatifmarket.com.tr",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/gece-aperatif-market",
      tags: ["Mobile App", "E-Commerce", "UX/UI", "Ordering Flow"],
    },
    {
      title: "FavCode",
      category: "Agency Website",
      description: "The website for my software agency, built to present web and mobile development services through a confident brand direction and a conversion-focused agency experience.",
      image: "/favcode-showcase-photoreal.png",
      liveUrl: "https://favcode.com.tr/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/favcode",
      tags: ["Website", "Agency", "Web Development", "Mobile Apps"],
    },
    {
      title: "Sepetim Gelsin",
      category: "Marketplace Platform",
      description: "A multi-surface marketplace concept for web and mobile, combining product discovery, promotional storefront sections, and a structured cart flow inspired by large-scale retail platforms.",
      image: "/sepetim-gelsin-showcase-premium.png",
      liveUrl: "https://sepetimgelsin.com.tr/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/sepetim-gelsin",
      tags: ["Web App", "Mobile App", "Marketplace", "E-Commerce"],
    },
    {
      title: "Smash Burger",
      category: "Restaurant Website",
      description: "A restaurant landing page concept developed to highlight signature menu items, support fast content scanning, and encourage ordering or booking actions through a bold visual layout.",
      image: "/smash-burger-showcase-premium.png",
      liveUrl: "https://restaurant-template-ten-puce.vercel.app/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/smash-burger",
      tags: ["Restaurant", "Landing Page", "Food UI", "Web Design"],
    },
    {
      title: "VIP Stones",
      category: "Fashion Website",
      description: "A premium textile and fashion storefront designed around elegant collection browsing, editorial product presentation, and a refined brand-first shopping experience.",
      image: "/stone-vip-showcase-photoreal.png",
      liveUrl: "https://stone-vip.netlify.app/tr",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/vip-stones",
      tags: ["Fashion", "E-Commerce", "Branding", "Web Experience"],
    },
    {
      title: "EMLAKJET",
      category: "Real Estate Website",
      description: "A real estate browsing experience focused on property discovery, filter clarity, and trust-building listing layouts for residential sales and rental journeys.",
      image: "/emlak-showcase-photoreal.png",
      liveUrl: "https://emlak-sigma.vercel.app/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/emlakjet",
      tags: ["Real Estate", "Listings", "Search UX", "Web Platform"],
    },
    {
      title: "Sonus",
      category: "Music Magazine Website",
      description: "A digital magazine website crafted for music, culture, and editorial storytelling, with a strong hero structure, article discovery flow, and reading-focused layout.",
      image: "/sonus-showcase-premium.png",
      liveUrl: "https://my-digital-haven.vercel.app/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/sonus",
      tags: ["Magazine", "Music", "Editorial", "Content Platform"],
    },
    {
      title: "My Digital Haven",
      category: "Personal Blog Website",
      description: "A calm and thoughtfully structured personal content website designed for blog publishing, curated sections, and a softer editorial tone across the browsing experience.",
      image: "/digital-haven-showcase-premium.png",
      // TODO: Add the live demo URL for this project when available.
      // liveUrl: "https://your-live-demo-url.com",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/my-digital-haven",
      tags: ["Blog", "Lifestyle", "Editorial", "Personal Website"],
    },
    {
      title: "Wapiuu",
      category: "Messaging SaaS Platform",
      description: "A WhatsApp API and automation platform concept presented through a premium SaaS dashboard view, campaign performance storytelling, and a clearer product-first interface direction.",
      image: "/wapiuu-showcase-v1.png",
      liveUrl: "https://wapiuu.com/en",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/wapiuu",
      tags: ["SaaS", "Dashboard", "Automation", "Messaging UX"],
    },
    {
      title: "Aqualux",
      category: "Cleaning Products Store",
      description: "A professional cleaning products storefront focused on category clarity, visible trust signals, and a conversion-friendly shopping flow supported by fast delivery messaging.",
      image: "/aqualux-showcase-photoreal.png",
      liveUrl: "https://temizlik-zen-quyd.vercel.app/",
      // TODO: Add the GitHub repository URL for this project.
      // repoUrl: "https://github.com/your-username/aqualux",
      tags: ["E-Commerce", "Retail", "Storefront", "Product UX"],
    },
  ];

  return (
    <section id="projects" className="bg-[#F2F2F2] py-24">
      <Container>
        <SectionTitle subtitle="Selected Work" title="Projects & Case Studies" className="mb-20" />

        <div className="grid gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
          {primaryProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <p className="mb-6 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">Additional Projects</p>
          <div className="grid gap-x-12 gap-y-24 md:grid-cols-2 lg:grid-cols-3">
            {additionalProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
