import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { damping: 28, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(y, { damping: 28, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("cursor-none-custom");

    const move = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const down = () => setClicking(true);
    const up = () => setClicking(false);
    const over = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(true);
    };
    const out = (e) => {
      if (e.target.closest?.("a, button, [data-cursor-hover]")) setHovering(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);

    return () => {
      document.body.classList.remove("cursor-none-custom");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-100 h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-100 rounded-full border border-white/70 mix-blend-difference"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovering ? 56 : clicking ? 18 : 32,
          height: hovering ? 56 : clicking ? 18 : 32,
          opacity: clicking ? 0.6 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </>
  );
}
