interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-bold">ЧОП «ТИГР»</div>
        <nav className="hidden md:flex gap-8">
          <a href="#services" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Услуги</a>
          <a href="#about" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">О нас</a>
          <a href="#legal" className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm">Реквизиты</a>
          <a href="#contact" className="text-white bg-white/10 hover:bg-white hover:text-black transition-all duration-300 uppercase text-sm px-4 py-1.5">Связаться</a>
        </nav>
      </div>
    </header>
  );
}