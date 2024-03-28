"use client";

import Hero from "@/components/sections/hero";
import PainPoint from "@/components/sections/pain-point";
import Faq from "@/components/ui/faq";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });
  return (
    <main>
      <div
        id="home"
        className=" h-[6rem] lg:h-[7rem] xl:h-[7rem] 2xl:h-[7.5rem]"
      />
      <Hero />
      <div className=" h-[20rem] lg:h-[15rem] xl:h-[20rem] 2xl:h-[25rem]" />

      <PainPoint />
      <div className=" h-[20rem] lg:h-[10rem] xl:h-[10rem] 2xl:h-[12rem]" />

      <Faq />
    </main>
  );
}
