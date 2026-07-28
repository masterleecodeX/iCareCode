import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const IMAGES = [
  "https://cdn.phototourl.com/free/2026-07-27-57dc447f-8243-4996-8df3-f3ec94de7c71.png", // Left Initial
  "https://cdn.phototourl.com/free/2026-07-26-6d1e47e8-8fa1-493f-be30-0233cf3a3162.png", // Main Image
  "https://user18383.na.imgto.link/public/20260727/chatgpt-image-jul-27-2026-01-27-54-pm.avif", // Right Initial
];

export function HeroSection() {
  const [positions, setPositions] = useState([0, 1, 2]);

  const handleLeftClick = () => {
    setPositions((prev) => [prev[2], prev[0], prev[1]]);
  };

  const handleRightClick = () => {
    setPositions((prev) => [prev[1], prev[2], prev[0]]);
  };

  const handleDragEnd = (_event: any, info: any) => {
    if (info.offset.x > 50) {
      handleLeftClick();
    } else if (info.offset.x < -50) {
      handleRightClick();
    }
  };

  const getPosition = (imageIndex: number) => positions.indexOf(imageIndex);

  return (
    <div
      className="relative w-full aspect-[68/38] flex items-center justify-center"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <AnimatePresence initial={false}>
        {IMAGES.map((src, index) => {
          const pos = getPosition(index);

          let x = "0%";
          let z = 0;
          let rotateY = 0;
          let scale = 1;
          let zIndex = 1;
          let opacity = 1;
          let overlayOpacity = 0;
          let blurAmount = "0px";
          let originX = "50%";

          let hoverState: any = {};
          if (pos === 0) {
            // Left
            x = "-28%";
            z = -120;
            rotateY = 20;
            scale = 0.85;
            zIndex = 0;
            opacity = 0.6;
            overlayOpacity = 0.5;
            blurAmount = "3px";
            originX = "50%";
            hoverState = {
              x: "-30%",
              z: -100,
              rotateY: 18,
              scale: 0.86,
              opacity: 0.75,
            };
          } else if (pos === 1) {
            // Center
            x = "0%";
            z = 0;
            rotateY = 0;
            scale = 1;
            zIndex = 10;
            opacity = 1;
            overlayOpacity = 0;
            blurAmount = "0px";
            originX = "50%";
            hoverState = { scale: 1.02 };
          } else if (pos === 2) {
            // Right
            x = "28%";
            z = -120;
            rotateY = -20;
            scale = 0.85;
            zIndex = 0;
            opacity = 0.6;
            overlayOpacity = 0.5;
            blurAmount = "3px";
            originX = "50%";
            hoverState = {
              x: "30%",
              z: -100,
              rotateY: -18,
              scale: 0.86,
              opacity: 0.75,
            };
          }

          return (
            <motion.div
              key={index}
              className="absolute top-0 bottom-0 w-full bg-[#F7F5F0] rounded-[16px] md:rounded-[28px] overflow-hidden shadow-2xl cursor-pointer"
              drag={pos === 1 ? "x" : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              initial={false}
              animate={{
                x,
                z,
                rotateY,
                scale,
                zIndex,
                opacity,
                originX,
              }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 25,
                mass: 1,
              }}
              whileHover={hoverState}
              onClick={() => {
                if (pos === 0) handleLeftClick();
                else if (pos === 2) handleRightClick();
              }}
            >
              <motion.img
                src={src}
                alt={`Hero ${index}`}
                draggable={false}
                className="absolute inset-0 w-full h-full object-cover"
                initial={false}
                animate={{
                  filter: `blur(${blurAmount})`,
                }}
                transition={{ duration: 0.4 }}
              />
              <motion.div
                className="absolute inset-0 bg-black pointer-events-none"
                initial={false}
                animate={{
                  opacity: overlayOpacity,
                }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
