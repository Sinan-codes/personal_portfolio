import { motion } from "framer-motion";
import { about, profile } from "../data/content";
import CountUp from "./CountUp";

function toKey(label) {
  return label
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim()
    .split(/\s+/)
    .map((w, i) => (i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase()))
    .join("");
}

const lineVariants = {
  hidden: { opacity: 0, x: -12 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, delay: 0.15 + i * 0.09, ease: "easeOut" },
  }),
};

export default function ProfileCode() {
  return (
    <div className="rounded-2xl border border-line bg-surface-2/70 shadow-2xl backdrop-blur">
      <div className="flex items-center gap-1.5 border-b border-line px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        <span className="ml-3 font-mono text-xs text-muted">developer.js</span>
      </div>

      <div className="space-y-1.5 p-6 font-mono text-sm leading-relaxed">
        <motion.p variants={lineVariants} initial="hidden" whileInView="show" custom={0} viewport={{ once: true }}>
          <span className="text-muted">const</span> developer = {"{"}
        </motion.p>

        <motion.p variants={lineVariants} initial="hidden" whileInView="show" custom={1} viewport={{ once: true }} className="pl-4">
          <span className="text-cyan-400">name</span>
          <span className="text-muted">:</span> <span className="text-teal-300">"{profile.name}"</span>,
        </motion.p>

        <motion.p variants={lineVariants} initial="hidden" whileInView="show" custom={2} viewport={{ once: true }} className="pl-4">
          <span className="text-cyan-400">title</span>
          <span className="text-muted">:</span> <span className="text-teal-300">"{profile.title}"</span>,
        </motion.p>

        <motion.p variants={lineVariants} initial="hidden" whileInView="show" custom={3} viewport={{ once: true }} className="pl-4">
          <span className="text-cyan-400">stats</span>
          <span className="text-muted">:</span> {"{"}
        </motion.p>

        {about.stats.map((stat, i) => (
          <motion.p
            key={stat.label}
            variants={lineVariants}
            initial="hidden"
            whileInView="show"
            custom={4 + i}
            viewport={{ once: true }}
            className="pl-8"
          >
            <span className="text-cyan-400">{toKey(stat.label)}</span>
            <span className="text-muted">:</span>{" "}
            <span className="font-semibold text-gradient">
              <CountUp value={stat.value} />
            </span>
            <span className="text-muted">,</span>
            <span className="ml-3 text-xs text-muted/70">// {stat.label}</span>
          </motion.p>
        ))}

        <motion.p
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          custom={4 + about.stats.length}
          viewport={{ once: true }}
          className="pl-4"
        >
          {"}"},
        </motion.p>

        <motion.p
          variants={lineVariants}
          initial="hidden"
          whileInView="show"
          custom={5 + about.stats.length}
          viewport={{ once: true }}
        >
          {"};"}
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-pulse bg-cyan-400/80" />
        </motion.p>
      </div>
    </div>
  );
}
