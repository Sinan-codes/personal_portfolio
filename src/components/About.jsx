import { motion } from "framer-motion";
import { about } from "../data/content";
import ProfileCode from "./ProfileCode";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="About me" title="A little about how I work" />

        <div className="grid gap-12 md:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 md:col-span-3"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2"
          >
            <ProfileCode />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
