"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useLocomotiveScroll } from "@/lib/providers/LocomotiveScroll/LocomotiveScroll";

import "./ScrollBar.scss";

export function ScrollBar() {
  const [rangeValue, setRangeValue] = useState(0);
  const { scrollTo } = useLocomotiveScroll();

  // Locomotive/Lenis drive the native scroll position, so motion's window-based
  // useScroll stays accurate.
  const { scrollYProgress } = useScroll();
  const spring = useSpring(scrollYProgress, { stiffness: 1000, damping: 100 });
  const y = useTransform(spring, [0, 1], ["0%", "-100%"]);
  const top = useTransform(spring, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) =>
      setRangeValue(v * 100)
    );
    return () => unsubscribe();
  }, [scrollYProgress]);

  const handleRangeChange = (event) => {
    const value = Number(event.target.value);
    setRangeValue(value);

    const scrollableHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    scrollTo((scrollableHeight * value) / 100, { duration: 1.2 });
  };

  return (
    <div className="scrollbar" data-desktop>
      <motion.div className="scrollbar__bar" style={{ top, y }} />
      <input
        type="range"
        min="0"
        max="100"
        value={rangeValue}
        onChange={handleRangeChange}
        className="scrollbar__range"
        aria-label="Scroll progress"
      />
    </div>
  );
}
