"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const LocomotiveScrollContext = createContext(null);

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);

export function LocomotiveScrollProvider({ children, options }) {
  const instanceRef = useRef(null);

  // Init once on mount. Locomotive Scroll v5 (built on Lenis) drives the
  // window scroll directly — no container element required.
  useEffect(() => {
    const ls = new LocomotiveScroll({
      lenisOptions: {
        duration: 0.7,
        lerp: 0.1,
        smoothWheel: true,
        wheelMultiplier: 2,
        ...options?.lenisOptions,
      },
      ...options,
    });

    instanceRef.current = ls;

    return () => {
      ls.destroy();
      instanceRef.current = null;
    };
  }, []);

  // Smooth-scroll to anchors: <a data-scroll-to="#section"> ... </a>
  useEffect(() => {
    const handleClick = (event) => {
      const trigger = event.target.closest("[data-scroll-to]");
      if (!trigger) return;

      event.preventDefault();
      const target = trigger.getAttribute("data-scroll-to");
      instanceRef.current?.scrollTo(target, { duration: 1.4 });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Stable, imperative API backed by the ref (the instance exists by the time
  // any of these are called from user interaction).
  const value = useMemo(
    () => ({
      scrollTo: (target, opts) => instanceRef.current?.scrollTo(target, opts),
      start: () => instanceRef.current?.start(),
      stop: () => instanceRef.current?.stop(),
      getLenis: () => instanceRef.current?.lenisInstance ?? null,
      getLocomotive: () => instanceRef.current,
    }),
    []
  );

  return (
    <LocomotiveScrollContext.Provider value={value}>
      {children}
    </LocomotiveScrollContext.Provider>
  );
}
