import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const px = useMotionValue(50);
  const py = useMotionValue(50);
  const rotateX = useSpring(0, { stiffness: 220, damping: 22 });
  const rotateY = useSpring(0, { stiffness: 220, damping: 22 });
  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${px}% ${py}%, rgba(255,255,255,0.16), transparent 70%)`;

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width;
    const relY = (e.clientY - rect.top) / rect.height;
    px.set(relX * 100);
    py.set(relY * 100);
    rotateY.set((relX - 0.5) * 12);
    rotateX.set((0.5 - relY) * 12);
  };

  const handleLeave = () => {
    setHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      <motion.div
        aria-hidden
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ backgroundImage: spotlight, mixBlendMode: "overlay" }}
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit]"
      />
      {children}
    </motion.div>
  );
}
