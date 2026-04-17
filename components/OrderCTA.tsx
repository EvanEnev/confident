export default function OrderCTA() {
  return (
    <section className="py-[120px] relative" id="order">
      <div className="wrap">
        <div className="cta-card bg-ink text-bg rounded relative overflow-hidden grid grid-cols-[1.3fr_1fr] gap-16 items-end px-16 py-[72px] transition-colors duration-300 max-[900px]:grid-cols-1 max-[900px]:px-8 max-[900px]:py-12 max-[900px]:gap-8 max-[560px]:px-6 max-[560px]:py-9">
          <div>
            <div className="mono mb-5" style={{ color: "color-mix(in oklch, var(--bg) 60%, transparent)" }}>
              § 03 / ЗАКАЗАТЬ
            </div>
            <h3 className="font-serif font-normal text-[clamp(44px,5vw,72px)] leading-[0.95] tracking-[-0.02em] relative z-10">
              Ваш кофе —<br />
              <em className="italic text-accent">ждёт в окне</em>
              <br />
              через 8 минут.
            </h3>
          </div>

          <div className="relative z-10">
            <p className="mb-6 text-base max-w-[320px]" style={{ color: "color-mix(in oklch, var(--bg) 70%, transparent)" }}>
              Закажите онлайн — заберите без очереди. Или привезём курьером по
              району.
            </p>
            <div className="flex flex-col gap-[10px]">
              <button className="flex items-center justify-between px-[22px] py-4 border rounded-full transition-all duration-200 cursor-pointer font-sans text-[15px] bg-accent border-accent text-paper hover:bg-paper hover:text-ink hover:border-paper">
                <span>Заказать на сайте</span>
                <span className="font-serif text-[20px]">→</span>
              </button>
              <button className="flex items-center justify-between px-[22px] py-4 border border-[color-mix(in_oklch,var(--bg)_25%,transparent)] rounded-full transition-all duration-200 cursor-pointer bg-transparent text-bg font-sans text-[15px] hover:bg-bg hover:text-ink hover:border-bg">
                <span>Яндекс Еда</span>
                <span className="font-serif text-[20px]">↗</span>
              </button>
              <button className="flex items-center justify-between px-[22px] py-4 border border-[color-mix(in_oklch,var(--bg)_25%,transparent)] rounded-full transition-all duration-200 cursor-pointer bg-transparent text-bg font-sans text-[15px] hover:bg-bg hover:text-ink hover:border-bg">
                <span>Delivery Club</span>
                <span className="font-serif text-[20px]">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
