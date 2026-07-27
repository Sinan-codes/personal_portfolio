import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!<>-_\\/[]{}=+*^?#%$";

export default function ScrambleText({ text, className, speed = 28 }) {
  const [display, setDisplay] = useState(text);
  const frame = useRef(0);
  const timeoutRef = useRef();

  useEffect(() => {
    let cancelled = false;
    const queue = Array.from({ length: text.length }, (_, i) => {
      const start = Math.floor(Math.random() * 20);
      return { to: text[i], start, end: start + Math.floor(Math.random() * 20) };
    });
    frame.current = 0;

    const tick = () => {
      if (cancelled) return;
      let output = "";
      let complete = 0;
      for (const { to, start, end } of queue) {
        if (frame.current >= end) {
          complete++;
          output += to;
        } else if (frame.current >= start) {
          output += CHARS[Math.floor(Math.random() * CHARS.length)];
        } else {
          output += "";
        }
      }
      setDisplay(output);
      if (complete === queue.length) return;
      frame.current++;
      timeoutRef.current = setTimeout(tick, speed);
    };

    tick();
    return () => {
      cancelled = true;
      clearTimeout(timeoutRef.current);
    };
  }, [text, speed]);

  return <span className={className}>{display}</span>;
}
