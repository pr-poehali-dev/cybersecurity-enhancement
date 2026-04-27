export default function About() {
  return (
    <section id="about" className="bg-neutral-50 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-400 mb-4">О предприятии</p>
        <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight max-w-3xl">
          Работаем в сфере безопасности с 1998 года
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4 text-neutral-600 leading-relaxed">
            <p>
              ООО ЧОП «Тигр» осуществляет деятельность в сфере охранных услуг и защиты жизни и здоровья
              граждан с 1998 года. Работаем в соответствии с Федеральным законом «О частной детективной
              и охранной деятельности в Российской Федерации».
            </p>
            <p>
              Лицензия на осуществление частной охранной деятельности <strong>№ 31 ЧО2021000408</strong> от 11 мая 2021 года,
              выдана Управлением Росгвардии по Белгородской области.
            </p>
            <p>
              Мы заключаем как долгосрочные, так и разовые договоры. С нами сотрудничают сотни клиентов —
              физические и юридические лица, крупные компании и корпорации.
            </p>
            <p className="text-sm text-neutral-400 italic">
              В числе постоянных заказчиков: «Русагро», «ЕТК», «Тамбовский Бекон», «Зелёная Долина» и другие ведущие организации.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-neutral-900">25+</div>
              <div>
                <p className="font-semibold text-neutral-800">лет на рынке</p>
                <p className="text-sm text-neutral-500">охранных услуг Белгородской области</p>
              </div>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-neutral-900">100+</div>
              <div>
                <p className="font-semibold text-neutral-800">лицензированных сотрудников</p>
                <p className="text-sm text-neutral-500">4–6 разряда, квалификационные экзамены</p>
              </div>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-neutral-900">24/7</div>
              <div>
                <p className="font-semibold text-neutral-800">круглосуточный мониторинг</p>
                <p className="text-sm text-neutral-500">пультовая охрана и группы быстрого реагирования</p>
              </div>
            </div>
            <div className="w-full h-px bg-neutral-200" />
            <div className="flex gap-6 items-start">
              <div className="text-4xl font-bold text-neutral-900">МВД</div>
              <div>
                <p className="font-semibold text-neutral-800">ФСБ, ВС, Росгвардия</p>
                <p className="text-sm text-neutral-500">опыт работы руководителей в силовых структурах</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
