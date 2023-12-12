import Cards from "@/components/cards";
import Hero from "@/components/hero";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <div>
        <Hero />
        <Cards />
      </div>
    </main>
  );
}
