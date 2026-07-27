import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/content";
import SectionHeading from "./SectionHeading";
import TiltCard from "./TiltCard";

function ProjectCard({ project, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
    >
      <TiltCard className="glow-card group overflow-hidden rounded-2xl border border-line bg-surface/60 backdrop-blur">
        <div className={`relative h-40 w-full overflow-hidden bg-gradient-to-br ${project.color}`}>
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-ink/20">
              <span className="font-display text-4xl font-semibold text-white/90">
                {project.title
                  .split(" ")
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 3)}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-xl font-semibold text-white">
              {project.title}
            </h3>
            <div className="flex shrink-0 gap-2">
              <a
                href={project.repo}
                aria-label={`${project.title} repository`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                <FaGithub size={15} />
              </a>
              <a
                href={project.href}
                aria-label={`${project.title} live site`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-white/5 px-3 py-1 font-mono text-xs text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="Projects I've built"
          description="A mix of full stack products and tools. Placeholder details for now — swap in your real projects, links, and screenshots."
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
