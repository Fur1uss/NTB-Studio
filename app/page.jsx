import Hero from "@/components/sections/Hero/Hero";
import Escogenos from "@/components/sections/Escogenos/Escogenos";
import Nosotros from "@/components/sections/Nosotros/Nosotros";
import NTBsticker from "@/components/proyectos/NTBStickerSupafinding/NTBSticker";

export default function Home() {
  return (
    <main>
      <Hero />
      <Escogenos />
      <Nosotros />
      <NTBsticker />
    </main>
  );
}