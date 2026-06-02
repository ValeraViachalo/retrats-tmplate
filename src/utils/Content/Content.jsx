"use client";

import { motion } from "motion/react";

// Renders an image or a video from a single `url`, auto-detected by extension.
// Spreads the rest onto the element, so it accepts className, style, motion
// props (animate, whileInView, ...), etc.
export function Content({ url, ...rest }) {
  const isVideo = /\.(mp4|webm)(\?.*)?$/.test(url);

  if (isVideo) {
    return (
      <motion.video
        loop
        muted
        autoPlay
        playsInline
        width="100%"
        height="100%"
        {...rest}
      >
        <source src={url} />
      </motion.video>
    );
  }

  return (
    <motion.img
      src={url}
      alt=""
      width="100%"
      height="100%"
      loading="lazy"
      {...rest}
    />
  );
}
