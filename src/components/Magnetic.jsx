import { useRef } from "react";
import { motion, useSpring } from "framer-motion";

export default function Magnetic({ children, className = "", href, ...props }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 150, damping: 15, mass: 0.3 });
  const y = useSpring(0, { stiffness: 150, damping: 15, mass: 0.3 });

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      className={className}
      {...props}
    >
      {children}
    </motion.a>
  );
}
