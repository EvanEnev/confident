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
    <section className="beans section" id="beans">
      <div className="wrap">
        <div className="section-head">
          <div className="idx">§ 02 / ЗЁРНА</div>
          <h2>
            Обжарка <em>на месте</em>
          </h2>
          <div className="tail">
            Маленькие партии раз в неделю. Можно купить с собой — 250 и 1000 г.
          </div>
        </div>

        <div className="beans-lead">
          <div>
            <h3>
              Три характера —<br />
              на каждое утро <em>свой</em>.
            </h3>
          </div>
          <div>
            <p>
              Мы не гонимся за редкостью. Берём понятные моносорта у проверенных
              импортёров, обжариваем сами на Probat, дегустируем каждую партию
              перед тем, как пустить в работу. Всё честно: дата обжарки на пакете,
              оценка по Q-Grader в описании, таблица вкуса на обратной стороне.
            </p>
          </div>
        </div>

        <div className="bean-row">
          {beans.map((bean) => (
            <article key={bean.variant} className="bean" data-variant={bean.variant}>
              <div className="bean-visual">
                <span className="bean-number">№ 0{bean.variant}</span>
                <div className="bean-shape" />
              </div>
              <div>
                <div className="mono">{bean.origin}</div>
                <h4>{bean.name}</h4>
              </div>
              <dl className="bean-facts">
                {bean.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
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
