import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navbar";
import PainPoint from "@/components/sections/pain-point";
import Faq from "@/components/ui/faq";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="h-[7.2rem]" />
      <Hero />
      <div className="h-[25rem]" />

      <PainPoint />
      <div className="h-[10rem]" />

      <Faq />
      <div className="h-[8rem]" />

      <Footer />
    </main>
  );
}
