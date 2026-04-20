'use client'

const hour = '08:00 — 21:00'
const hours = [
  {label: 'Пн', open: hour, dayIndex: 1},
  {label: 'Вт', open: hour, dayIndex: 2},
  {label: 'Ср', open: hour, dayIndex: 3},
  {label: 'Чт', open: hour, dayIndex: 4},
  {label: 'Пт', open: hour, dayIndex: 5},
  {label: 'Сб', open: hour, dayIndex: 6},
  {label: 'Вс', open: hour, dayIndex: 0},
]

export default function Location() {
  const todayIndex = new Date().getDay()

  return (
    <section
      className="bg-bg-2 py-30 transition-colors duration-300"
      id="location">
      <div className="wrap">
        <div className="border-line-soft mb-14 grid grid-cols-[180px_1fr_auto] items-baseline gap-8 border-b pb-7 max-[900px]:grid-cols-1 max-[900px]:gap-3">
          <div className="mono">§ 02 / ГДЕ МЫ</div>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal tracking-[-0.02em]">
            В ТЦ <em className="text-accent italic">на первом этаже</em>
          </h2>
          <div className="text-ink-3 max-w-70 text-right text-sm max-[900px]:max-w-none max-[900px]:text-left">
            Справа после входа
          </div>
        </div>

        <div className="grid grid-cols-2 items-start gap-16 max-[900px]:grid-cols-1 max-[900px]:gap-8">
          <iframe
            className="h-full w-full"
            src="https://yandex.ru/map-widget/v1/?um=constructor%3Abb6138af59f937bd4cc80898100f5d0bd84f5c823378fd2d5fe68df4c77f7ef7&amp;source=constructor"
            width="500"
            height="400"
          />
          <div>
            <h3 className="font-serif text-[52px] leading-none font-normal tracking-[-0.02em]">
              Староватутинский проезд,{' '}
              <em className="text-accent italic">14</em>
            </h3>
            <div className="text-ink-2 mt-6 text-[18px] leading-normal">
              ТЦ Клён <br />
              На первом этаже, справа после входа
              <br />
              <br />
              <span className="text-ink-3 text-sm">
                Метро Бабушкинская · 10 мин пешком
              </span>
            </div>

            <div className="border-line mt-10 border-t">
              {hours.map(row => {
                const isToday = row.dayIndex === todayIndex
                return (
                  <div
                    key={row.label}
                    className={`hour-row border-line-soft grid grid-cols-[100px_1fr_auto] items-center border-b py-3.5 text-[15px] ${
                      isToday
                        ? 'today -mx-3 rounded-sm bg-[color-mix(in_oklch,var(--accent)_14%,transparent)] px-3'
                        : ''
                    }`}>
                    <span className="d text-ink-2">{row.label}</span>
                    <span className="h font-serif text-[22px]">{row.open}</span>
                    <span
                      className={`font-mono text-[10px] tracking-[0.08em] uppercase ${isToday ? 'text-[oklch(0.55_0.16_145)]' : 'text-ink-3'}`}>
                      {isToday ? 'сейчас открыто' : null}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://yandex.com/maps/-/CPCFnD~V"
                className="border-line text-ink hover:bg-ink hover:text-bg hover:border-ink inline-flex items-center gap-2 rounded-full border bg-transparent px-4 py-2.25 text-[13px] transition-all duration-200">
                Построить маршрут →
              </a>
              <a
                href="tel:+79689406948"
                className="border-line text-ink hover:bg-ink hover:text-bg hover:border-ink inline-flex items-center gap-2 rounded-full border bg-transparent px-4 py-2.25 text-[13px] transition-all duration-200">
                +7 968 940 69 48
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
