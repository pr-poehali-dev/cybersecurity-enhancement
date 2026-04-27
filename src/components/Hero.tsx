import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/4c59bf4b-5708-48d4-81eb-9190bfe18d3f/files/e0203747-407f-4bc6-9450-9bae49914700.jpg"
          alt="Охранное предприятие Тигр"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-70">ООО ЧОП</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6">
          ТИГР
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 font-light">
          Надёжная охрана объектов, персонала и ценностей — 24/7
        </p>
        <a
          href="#contact"
          className="inline-block mt-10 px-8 py-3 border border-white text-white uppercase text-sm tracking-widest hover:bg-white hover:text-black transition-all duration-300"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  );
}