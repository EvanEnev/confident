const beans = [
  {
    variant: "1",
    origin: "эфиопия · иргачеффе",
    name: "Конфидент Светлый",
    facts: [
      { label: "Обжарка", value: "Светлая" },
      { label: "Метод",   value: "Washed" },
      { label: "Нота",    value: "Жасмин, лимон" },
      { label: "Q-Grade", value: "86.5" },
    ],
  },
  {
    variant: "2",
    origin: "колумбия · уила",
    name: "Черёмушки House",
    facts: [
      { label: "Обжарка", value: "Средняя" },
      { label: "Метод",   value: "Honey" },
      { label: "Нота",    value: "Карамель, какао" },
      { label: "Q-Grade", value: "85.0" },
    ],
  },
  {
    variant: "3",
    origin: "бразилия · серрадо",
    name: "Тёмный Вечер",
    facts: [
      { label: "Обжарка", value: "Тёмная" },
      { label: "Метод",   value: "Natural" },
      { label: "Нота",    value: "Шоколад, орех" },
      { label: "Q-Grade", value: "84.0" },
    ],
  },
];

export default function Beans() {
  return (
    <section className="py-[120px]" id="beans">
      <div className="wrap">
        <div className="grid grid-cols-[180px_1fr_auto] gap-8 items-baseline mb-14 pb-7 border-b border-line-soft max-[900px]:grid-cols-1 max-[900px]:gap-3">
          <div className="mono">§ 02 / ЗЁРНА</div>
          <h2 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.02em]">
            Обжарка <em className="italic text-accent">на месте</em>
          </h2>
          <div className="text-sm text-ink-3 max-w-[280px] text-right max-[900px]:text-left max-[900px]:max-w-none">
            Маленькие партии раз в неделю. Можно купить с собой — 250 и 1000 г.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-12 mb-16 max-[900px]:grid-cols-1">
          <div>
            <h3 className="font-serif font-normal text-[clamp(36px,4vw,52px)] leading-[1.05] tracking-[-0.02em]">
              Три характера —<br />
              на каждое утро <em className="italic text-accent">свой</em>.
            </h3>
          </div>
          <div>
            <p className="text-ink-2 text-[17px] max-w-[460px]">
              Мы не гонимся за редкостью. Берём понятные моносорта у проверенных
              импортёров, обжариваем сами на Probat, дегустируем каждую партию
              перед тем, как пустить в работу. Всё честно: дата обжарки на пакете,
              оценка по Q-Grader в описании, таблица вкуса на обратной стороне.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-px bg-line-soft border border-line-soft max-[900px]:grid-cols-1">
          {beans.map((bean) => (
            <article key={bean.variant} className="bean bg-bg p-7 flex flex-col gap-5 transition-colors duration-300" data-variant={bean.variant}>
              <div className="bean-visual aspect-square bg-bg-2 relative grid place-items-center overflow-hidden">
                <span className="bean-number absolute top-4 left-4 font-mono text-[11px] text-ink-3 tracking-[0.08em]">№ 0{bean.variant}</span>
                <div className="bean-shape w-[55%] h-[75%] bg-ink rounded-[50%_50%_50%_50%/60%_60%_40%_40%] relative shadow-[inset_-8px_-14px_22px_color-mix(in_oklch,black_35%,transparent),0_20px_30px_-20px_color-mix(in_oklch,var(--ink)_50%,transparent)] transition-colors duration-300" />
              </div>
              <div>
                <div className="mono">{bean.origin}</div>
                <h4 className="font-serif text-[26px] font-normal tracking-[-0.01em]">{bean.name}</h4>
              </div>
              <dl className="grid grid-cols-2 gap-4 gap-x-3 pt-4 border-t border-line-soft text-[13px]">
                {bean.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-ink-3 font-mono text-[10px] tracking-[0.08em] uppercase mb-0.5">{f.label}</dt>
                    <dd className="text-ink">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
