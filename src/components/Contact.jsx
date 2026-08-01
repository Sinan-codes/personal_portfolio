import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { profile } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="glow-card mx-auto max-w-4xl overflow-hidden rounded-3xl border border-line bg-surface/60 p-10 text-center backdrop-blur sm:p-16"
      >
        <span className="font-mono text-sm uppercase tracking-widest text-cyan-400">
          Contact
        </span>
        <h2 className="font-display mx-auto mt-4 max-w-xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Let's build something <span className="text-gradient">great</span> together
        </h2>
        <p className="mx-auto mt-4 max-w-md text-muted">
          I'm currently open to new opportunities and freelance work. Send me a
          message and I'll get back to you as soon as I can.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-cyan-500/20 transition-transform hover:scale-105"
          >
            <Mail size={16} />
            {profile.email}
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4">
          {[
            { icon: FaGithub, href: profile.social.github, label: "GitHub" },
            { icon: FaLinkedin, href: profile.social.linkedin, label: "LinkedIn" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-white/40 hover:text-white"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
