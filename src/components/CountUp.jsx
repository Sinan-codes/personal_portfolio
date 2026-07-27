import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function CountUp({ value, duration = 1.4 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const match = String(value).match(/^(\d+)(.*)$/);
  const numeric = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const step = (ts) => {
      if (start === undefined) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * numeric));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, numeric, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
