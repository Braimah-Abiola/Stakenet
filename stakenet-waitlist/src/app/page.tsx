import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import { Navigation } from "@/components/sections/navbar";
import PainPoint from "@/components/sections/pain-point";
import Faq from "@/components/ui/faq";

export default function Home() {
  return (
    <main>
      <Navigation />
      <div className="h-32" />
      <Hero />
      <div className="h-[20rem]" />

      <PainPoint />
      <Faq />
      <div className="h-[5rem]" />

      <Footer />
    </main>
  );
}
