import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "../data/content";
import Magnetic from "./Magnetic";
import ScrambleText from "./ScrambleText";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center px-6 pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-1.5 text-sm text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            {profile.location}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="font-display max-w-xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl"
          >
            Hi, I'm {profile.shortName.split(" ")[0]} —{" "}
            <ScrambleText text={profile.title} className="text-gradient" />
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Magnetic
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20"
            >
              View my work
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Magnetic>
            <Magnetic
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white/40 hover:bg-white/5"
            >
              Get in touch
            </Magnetic>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-12 flex items-center gap-5"
          >
            {[
              { icon: FaGithub, href: profile.social.github, label: "GitHub" },
              { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-white/40 hover:text-white"
              >
                <Icon size={17} />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none"
        >
          <div className="absolute inset-0 scale-110 rounded-full bg-gradient-to-br from-white/15 via-white/5 to-transparent blur-3xl" />
          <img
            src={profile.photo}
            alt={profile.name}
            className="relative w-full [mask-image:radial-gradient(ellipse_50%_42%_at_50%_38%,#000_25%,rgba(0,0,0,0.9)_40%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.2)_78%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_50%_42%_at_50%_38%,#000_25%,rgba(0,0,0,0.9)_40%,rgba(0,0,0,0.55)_58%,rgba(0,0,0,0.2)_78%,transparent_100%)]"
          />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted transition-colors hover:text-white"
        aria-label="Scroll to about"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </motion.a>
    </section>
  );
}
