"use client";
import { cn } from "@/lib/utils";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AppStoreButton from "./app-store-button";
import Chip from "./chip";
import GooglePlayButton from "./google-play-button";
import { Menu } from "lucide-react";

export const FloatingNav = () => {
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

  const navItems = ["Home", "About", "Blog", "FAQs"];

  const [selected, setSelected] = useState(navItems[0]);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn("flex fixed top-5 w-full mx-auto px-3 md:px-40 z-[2]")}
      >
        <div className="w-full flex flex-row justify-between items-center">
          <Link href="/">
            <div className=" relative w-[152px] h-[42px]">
              <Image
                className=" object-contain"
                fill
                src="/images/logo.png"
                alt="Stakenet logo"
              />
            </div>
          </Link>
          <div className="hidden lg:block">
            <div className=" max-w-fit flex border border-transparent rounded-full ml-[11rem] bg-[#0E0E0E] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] pr-2.5 pl-2.5 py-2  items-center justify-center space-x-4">
              {navItems.map((navItem) => (
                <Link
                  key={`link=${navItem}`}
                  href={
                    navItem === "About" || navItem === "Blog"
                      ? `/${navItem.toLowerCase()}`
                      : `/#${navItem.toLowerCase()}`
                  }
                >
                  <Chip
                    text={navItem}
                    selected={selected === navItem}
                    setSelected={setSelected}
                    key={navItem}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className=" hidden lg:block">
            <div className="flex flex-row gap-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>
          <div className="lg:hidden z-[2]">
            <div className="flex cursor-pointer items-center text-white/70 hover:text-black justify-center w-12 h-12 aspect-square rounded-full bg-[#242525] hover:bg-[#AECE2A] hover:scale-110 transition-all ease-in-out duration-200">
              <Menu />
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
