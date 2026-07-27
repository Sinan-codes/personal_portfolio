import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-60 h-[3px] origin-left bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-400"
      style={{ scaleX }}
    />
  );
}
