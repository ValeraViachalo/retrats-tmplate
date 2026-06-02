"use client";

import { useEffect, useState } from "react";
import { BREAKPOINTS } from "./breakpoints";

// Subscribe to a media query string. SSR-safe (returns false until mounted).
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = () => setMatches(mql.matches);

    onChange();
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, [query]);

  return matches;
}

export const useIsMobile = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);

export const useIsTablet = () =>
  useMediaQuery(`(max-width: ${BREAKPOINTS.tablet}px)`);

export const useIsDesktop = () =>
  useMediaQuery(`(min-width: ${BREAKPOINTS.tablet + 1}px)`);
