import Icon from "@/components/ui/icon";

const stats = [
  { value: "1998", label: "Год основания" },
  { value: "70+", label: "Лицензированных сотрудников" },
  { value: "4–6", label: "Разряд охранников" },
  { value: "24/7", label: "Режим работы ГБР" },
];

const credentials = [
  {
    icon: "ShieldCheck",
    title: "Лицензия Росгвардии",
    desc: "31 ЧО2021000408 от 11 мая 2021 г., выдана Управлением Росгвардии по Белгородской области",
  },
  {
    icon: "Scale",
    title: "Федеральный закон",
    desc: 'Деятельность осуществляется в соответствии с ФЗ «О частной детективной и охранной деятельности в РФ»',
  },
  {
    icon: "Award",
    title: "Квалификация персонала",
    desc: "Все сотрудники сдают квалификационные экзамены и проходят периодические проверки на пригодность к действиям с оружием",
  },
  {
    icon: "Users",
    title: "Опыт в силовых структурах",
    desc: "Руководство и сотрудники — ветераны МВД, ФСБ, ВС РФ и Росгвардии с многолетним опытом",
  },
];

export default function License() {
  return (
    <section id="about" className="bg-neutral-950 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="uppercase text-neutral-400 text-sm tracking-widest mb-4">Доверие и прозрачность</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-16 max-w-2xl leading-tight">
          Лицензия, опыт и полная ответственность за каждый объект
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((s) => (
            <div key={s.value} className="border-t border-neutral-700 pt-6">
              <p className="text-4xl md:text-5xl font-bold mb-2">{s.value}</p>
              <p className="text-neutral-400 text-sm uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((c) => (
            <div key={c.title} className="flex gap-5 p-6 border border-neutral-800 hover:border-neutral-600 transition-colors duration-300">
              <div className="shrink-0 mt-1">
                <Icon name={c.icon} fallback="ShieldCheck" size={24} className="text-neutral-300" />
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-white">{c.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 border border-neutral-700 bg-neutral-900">
          <p className="text-neutral-300 text-sm leading-relaxed">
            <span className="text-white font-medium">Тариф на охранные услуги:</span> охранник 4-го разряда — <span className="text-white font-semibold">177 руб./час</span> (НДС не предусмотрен, применяется УСН). Заключаем как долгосрочные, так и разовые договоры.
          </p>
        </div>
      </div>
    </section>
  );
}