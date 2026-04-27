export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/4c59bf4b-5708-48d4-81eb-9190bfe18d3f/files/a40f6f86-91dd-4473-979b-3b48456bd054.jpg"
          alt="Центр мониторинга ЧОП Тигр"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Белгород · Старый Оскол · Курск</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Более 100 лицензированных охранников. Руководители — выходцы из МВД, ФСБ, Вооружённых сил и Росгвардии.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono w-6 shrink-0">01</span>
            <span className="text-neutral-700 text-sm">Работаем с 1998 года — более 25 лет опыта</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono w-6 shrink-0">02</span>
            <span className="text-neutral-700 text-sm">Квалификация 4–6 разряда, регулярные экзамены</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono w-6 shrink-0">03</span>
            <span className="text-neutral-700 text-sm">Проверка на пригодность к применению оружия</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm font-mono w-6 shrink-0">04</span>
            <span className="text-neutral-700 text-sm">Индивидуальный подход к каждому клиенту</span>
          </div>
        </div>
        <a
          href="#contact"
          className="bg-black text-white border border-black px-6 py-3 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Заказать охрану
        </a>
      </div>
    </div>
  );
}