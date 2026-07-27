import { motion } from "framer-motion";
import { marqueeSkills, skills } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const loop = [...marqueeSkills, ...marqueeSkills];

  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A snapshot of the languages, frameworks, and infrastructure I work with most."
        />
      </div>

      <div className="relative mb-16 overflow-hidden border-y border-line py-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
        <div className="animate-marquee flex w-max gap-10 whitespace-nowrap">
          {loop.map((skill, i) => (
            <span
              key={i}
              className="font-display text-2xl font-medium text-white/20"
            >
              {skill} <span className="text-cyan-500/40">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((group, i) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glow-card rounded-2xl border border-line bg-surface/60 p-6 backdrop-blur"
          >
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-cyan-400">
              {group.group}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {group.items.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-blue-500 to-teal-400" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
