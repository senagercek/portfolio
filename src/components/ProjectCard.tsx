import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image?: string;
  imageClassName?: string;
  imageWrapperClassName?: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const actionButtonClassName =
  "inline-flex items-center justify-center gap-2 border border-border px-4 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-foreground hover:text-background";

export const ProjectCard = ({
  title,
  category,
  description,
  image,
  imageClassName,
  imageWrapperClassName,
  tags,
  liveUrl,
  repoUrl,
}: ProjectCardProps) => {
  const isSvgImage = Boolean(image?.toLowerCase().endsWith(".svg"));

  const imageMedia = image ? (
    isSvgImage ? (
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="h-full w-full"
      >
        <object
          data={image}
          type="image/svg+xml"
          aria-label={title}
          className={`pointer-events-none h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 ${imageClassName ?? ""}`}
        />
      </motion.div>
    ) : (
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        src={image}
        alt={title}
        className={`h-full w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 ${imageClassName ?? ""}`}
      />
    )
  ) : (
    <div className="flex h-full w-full items-end bg-gradient-to-br from-[#191919] via-[#2A2A2A] to-[#4A4A4A] p-6">
      <div>
        <p className="mb-2 text-[10px] uppercase tracking-[0.3em] text-white/60">{category}</p>
        <h3 className="max-w-[12ch] text-3xl text-white font-heading">{title}</h3>
      </div>
    </div>
  );

  return (
    <motion.article initial={false} className="group relative flex h-full flex-col overflow-hidden">
      {liveUrl ? (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className={`relative block aspect-[4/5] overflow-hidden bg-border md:aspect-square ${imageWrapperClassName ?? ""}`}
          aria-label={`${title} live project`}
        >
          {imageMedia}
          <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </a>
      ) : (
        <div className={`relative aspect-[4/5] overflow-hidden bg-border md:aspect-square ${imageWrapperClassName ?? ""}`}>
          {imageMedia}
          <div className="absolute inset-0 bg-foreground/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      )}

      <div className="flex flex-1 flex-col pt-8">
        <div className="mb-4 flex items-start justify-between gap-6">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent">{category}</p>
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-accent"
              >
                <h3 className="mb-3 text-3xl font-heading">{title}</h3>
              </a>
            ) : (
              <h3 className="mb-3 text-3xl font-heading">{title}</h3>
            )}
          </div>
          <div className="flex shrink-0 gap-4">
            {repoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} GitHub repository`}
                className="text-secondary transition-colors hover:text-accent"
              >
                <Github size={18} />
              </a>
            ) : (
              <span aria-hidden="true" className="text-secondary/30">
                <Github size={18} />
              </span>
            )}
            {liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${title} live project`}
                className="text-secondary transition-colors hover:text-accent"
              >
                <ExternalLink size={18} />
              </a>
            ) : (
              <span aria-hidden="true" className="text-secondary/30">
                <ExternalLink size={18} />
              </span>
            )}
          </div>
        </div>

        <p className="mb-6 line-clamp-3 text-secondary">{description}</p>

        <div className="mb-8 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-background px-3 py-2 text-[10px] uppercase tracking-[0.18em] text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3">
          {liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noreferrer" className={actionButtonClassName}>
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : (
            <span className={`${actionButtonClassName} cursor-not-allowed border-dashed text-secondary/50 hover:bg-transparent hover:text-secondary/50`}>
              <ExternalLink size={14} />
              Live Demo
            </span>
          )}
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer" className={actionButtonClassName}>
              <Github size={14} />
              GitHub
            </a>
          ) : (
            <span className={`${actionButtonClassName} cursor-not-allowed border-dashed text-secondary/50 hover:bg-transparent hover:text-secondary/50`}>
              <Github size={14} />
              GitHub
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
};
