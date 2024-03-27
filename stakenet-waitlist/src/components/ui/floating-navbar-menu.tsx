"use client";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Header from "./header";

export const FloatingNavMobile = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const navItems = ["Home", "About", "FAQs"];

  const [selected, setSelected] = useState(navItems[0]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={cn(
          "flex fixed top-5 w-full mx-auto px-3 lg:px-[40px] z-[10]"
        )}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <Link className="logo" href="/">
            <div className=" relative w-[152px] h-[42px]">
              <Image
                className=" object-contain"
                fill
                src="/images/logo.png"
                alt="Stakenet logo"
              />
            </div>
          </Link>

          <Header />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
