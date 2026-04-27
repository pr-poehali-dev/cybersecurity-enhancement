import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const services = [
    "Вооружённая охрана объекта",
    "Невооружённая охрана объекта",
    "Группа быстрого реагирования (ГБР)",
    "Пультовая охрана / Видеонаблюдение",
    "VIP-охрана / Личное сопровождение",
    "Сопровождение грузов / Инкассация",
    "Охрана массового мероприятия",
    "Экономическая безопасность",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
        <div className="flex-1">
          <p className="uppercase text-neutral-400 text-sm tracking-widest mb-4">Связаться с нами</p>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 mb-8 leading-tight">
            Оставьте заявку — перезвоним в течение часа
          </h2>
          <div className="flex flex-col gap-6 text-neutral-700">
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Телефон</p>
              <a href="tel:+79511470313" className="text-2xl font-semibold text-neutral-900 hover:text-neutral-600 transition-colors">
                +7 (951) 147-03-13
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Email</p>
              <a href="mailto:info@chop-tigr.ru" className="text-lg text-neutral-900 hover:text-neutral-600 transition-colors">
                info@chop-tigr.ru
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Регион</p>
              <p className="text-lg text-neutral-900">Белгородская область</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-neutral-400 mb-1">Режим работы</p>
              <p className="text-lg text-neutral-900">Круглосуточно, 24/7</p>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {status === "success" ? (
            <div className="border border-neutral-200 p-10 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <p className="text-4xl mb-4">✓</p>
              <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
              <p className="text-neutral-500">Мы свяжемся с вами в ближайшее время.</p>
              <button onClick={() => setStatus("idle")} className="mt-6 text-sm uppercase tracking-widest underline text-neutral-400 hover:text-neutral-900 transition-colors">
                Отправить ещё
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Ваше имя *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Иванов Иван"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Телефон *</label>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+7 (___) ___-__-__"
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Вид услуги</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors bg-white text-neutral-700"
                >
                  <option value="">Выберите услугу...</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-neutral-400 block mb-1">Комментарий</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Опишите ваш объект или задачу..."
                  rows={4}
                  className="w-full border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:border-neutral-900 transition-colors resize-none"
                />
              </div>
              {status === "error" && (
                <p className="text-red-500 text-sm">Ошибка отправки. Позвоните нам: +7 (951) 147-03-13</p>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className="bg-black text-white px-8 py-4 uppercase text-sm tracking-widest hover:bg-neutral-800 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {status === "loading" ? "Отправляем..." : "Отправить заявку"}
              </button>
              <p className="text-xs text-neutral-400">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
