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
          src="https://cdn.poehali.dev/projects/4c59bf4b-5708-48d4-81eb-9190bfe18d3f/files/a49141b1-c078-42c8-aea7-58f639cfeac6.jpg"
          alt="ЧОП Тигр — охрана и безопасность"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-4">
        <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] mb-6 opacity-50 font-light">
          Общество с ограниченной ответственностью
        </p>
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] mb-3 opacity-60">
          Частное охранное предприятие
        </p>
        <h1
          className="font-bold mb-2 leading-none"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            letterSpacing: "-0.02em",
            textShadow: "0 0 80px rgba(255,200,80,0.15)",
          }}
        >
          ТИГР
        </h1>
        <div className="flex items-center justify-center gap-4 mb-8 opacity-40">
          <div className="h-px w-16 bg-white" />
          <p className="text-xs uppercase tracking-[0.4em]">с 1998 года</p>
          <div className="h-px w-16 bg-white" />
        </div>
        <p className="text-base md:text-lg max-w-xl mx-auto opacity-80 font-light tracking-wide">
          Надёжная охрана объектов, персонала и ценностей — 24/7
        </p>
        <a
          href="#contact"
          className="inline-block mt-10 px-10 py-3 border border-white/60 text-white uppercase text-xs tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  );
}