"use client";

const hour = '08:00 — 21:00'
const hours = [
  { label: "Пн", open: hour, dayIndex: 1 },
  { label: "Вт", open: hour, dayIndex: 2 },
  { label: "Ср", open: hour, dayIndex: 3 },
  { label: "Чт", open: hour, dayIndex: 4 },
  { label: "Пт", open: hour, dayIndex: 5 },
  { label: "Сб", open: hour, dayIndex: 6 },
  { label: "Вс", open: hour, dayIndex: 0 },
]

export default function Location() {
  const todayIndex = new Date().getDay();

  return (
    <section className="bg-bg-2 py-[120px] transition-colors duration-300" id="location">
      <div className="wrap">
        <div className="grid grid-cols-[180px_1fr_auto] gap-8 items-baseline mb-14 pb-7 border-b border-line-soft max-[900px]:grid-cols-1 max-[900px]:gap-3">
          <div className="mono">§ 02 / ГДЕ МЫ</div>
          <h2 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.02em]">
            В ТЦ <em className="italic text-accent">на первом этаже</em>
          </h2>
          <div className="text-sm text-ink-3 max-w-[280px] text-right max-[900px]:text-left max-[900px]:max-w-none">
            Справа после входа
          </div>
        </div>

        <div className="grid grid-cols-2 gap-16 items-start max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <iframe
            className="w-full h-full"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb6138af59f937bd4cc80898100f5d0bd84f5c823378fd2d5fe68df4c77f7ef7&amp;source=constructor"
            width="500"
            height="400"
          />
          <div>
            <h3 className="font-serif font-normal text-[52px] leading-none tracking-[-0.02em]">
              Староватутинский проезд, <em className="italic text-accent">14</em>
            </h3>
            <div className="mt-6 text-[18px] text-ink-2 leading-[1.5]">
              ТЦ Клён <br />
              На первом этаже, справа после входа
              <br /><br />
              <span className="text-ink-3 text-sm">
                Метро Бабушкинская · 10 мин пешком
              </span>
            </div>

            <div className="mt-10 border-t border-line">
              {hours.map((row) => {
                const isToday = row.dayIndex === todayIndex;
                return (
                  <div
                    key={row.label}
                    className={`hour-row grid grid-cols-[100px_1fr_auto] py-[14px] border-b border-line-soft items-center text-[15px] ${
                      isToday
                        ? "today px-3 -mx-3 rounded-sm bg-[color-mix(in_oklch,var(--accent)_14%,transparent)]"
                        : ""
                    }`}
                  >
                    <span className="d text-ink-2">{row.label}</span>
                    <span className="h font-serif text-[22px]">{row.open}</span>
                    <span className={`font-mono text-[10px] tracking-[0.08em] uppercase ${isToday ? "text-[oklch(0.55_0.16_145)]" : "text-ink-3"}`}>
                      {isToday ? "сейчас открыто" : null}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex gap-3 flex-wrap">
              <a href="#" className="inline-flex items-center gap-2 py-[9px] px-4 rounded-full border border-line text-[13px] transition-all duration-200 bg-transparent text-ink hover:bg-ink hover:text-bg hover:border-ink">
                Построить маршрут →
              </a>
              <a href="tel:+74957770000" className="inline-flex items-center gap-2 py-[9px] px-4 rounded-full border border-line text-[13px] transition-all duration-200 bg-transparent text-ink hover:bg-ink hover:text-bg hover:border-ink">
                +7 495 777 00 00
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
