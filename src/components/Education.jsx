import { motion } from "framer-motion";
import { education } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Education" title="Where I've studied" />

        <div className="relative border-l border-line pl-8">
          {education.map((item, i) => (
            <motion.div
              key={item.degree + item.period}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-blue-500 to-teal-400 ring-4 ring-ink" />
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.degree}
                </h3>
                <span className="font-mono text-xs text-cyan-400">
                  {item.period}
                </span>
              </div>
              <p className="mt-0.5 text-sm font-medium text-muted">
                {item.institution}
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
