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
      <div id="services" className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наши услуги</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Охрана объектов, физическая защита персонала, пультовая охрана и сопровождение грузов — полный спектр услуг безопасности для бизнеса.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-6">01</span>
            <span className="text-neutral-700">Охрана объектов и территорий</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-6">02</span>
            <span className="text-neutral-700">Физическая охрана персонала</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-6">03</span>
            <span className="text-neutral-700">Пультовая охрана и мониторинг 24/7</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-neutral-400 text-sm uppercase tracking-wide w-6">04</span>
            <span className="text-neutral-700">Сопровождение ценных грузов</span>
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Заказать охрану
        </button>
      </div>
    </div>
  );
}