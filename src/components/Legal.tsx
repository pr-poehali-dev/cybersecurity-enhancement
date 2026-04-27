export default function Legal() {
  return (
    <section id="legal" className="bg-neutral-900 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">Реквизиты</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-12">
          ООО ЧОП «Тигр»
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">Полное наименование</p>
            <p className="text-white text-sm leading-relaxed">
              Общество с ограниченной ответственностью частное охранное предприятие «Тигр»
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">Адрес</p>
            <p className="text-white text-sm">308000, Белгородская область, г. Белгород, Народный б-р, д. 79</p>
          </div>
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">Лицензия</p>
            <p className="text-white text-sm">31 ЧО2021000408 от 11.05.2021</p>
            <p className="text-neutral-400 text-xs">Управление Росгвардии по Белгородской области</p>
          </div>
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">ОГРН / ИНН / КПП</p>
            <p className="text-white text-sm">1023101683659 / 3123045712 / 312301001</p>
          </div>
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">Расчётный счёт</p>
            <p className="text-white text-sm">40702810700000000538</p>
            <p className="text-neutral-400 text-xs">Белгородский филиал ПАО АКБ «Металлинвестбанк»</p>
          </div>
          <div className="space-y-1">
            <p className="text-neutral-400 text-xs uppercase tracking-wide">БИК / Корр. счёт</p>
            <p className="text-white text-sm">041403838</p>
            <p className="text-white text-sm">30101810014030000838</p>
          </div>
        </div>
      </div>
    </section>
  );
}
