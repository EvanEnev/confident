export default function Hero() {
  return (
    <section className="pt-12 pb-16 relative">
      <div className="wrap">
        <div className="grid grid-cols-[1.05fr_0.95fr] gap-12 items-end max-[900px]:grid-cols-1">
          <div>
            <div className="flex items-center gap-3 mb-7">
              <span className="w-9 h-px bg-ink-3" />
              <span className="mono">кофейня · с 2023 · бабушкинская</span>
            </div>

            <h1 className="font-serif font-normal text-[clamp(64px,9vw,140px)] leading-[0.92] tracking-[-0.03em] text-ink">
              Тихий<br />
              уголок для <em className="italic text-accent">своих</em>
            </h1>

            <p className="max-w-105 mt-7 text-ink-2 text-[17px] leading-[1.5]">
              Маленькая кофейня в торговом центре. Медленное утро,
              знакомые лица и свежеобжаренные зёрна.
            </p>

            <div className="grid grid-cols-3 gap-6 mt-10 pt-7 border-t border-line-soft max-w-[520px] max-[560px]:grid-cols-2">
              <div>
                <div className="font-serif text-[28px] leading-none">14</div>
                <div className="mono mt-2">позиций в меню</div>
              </div>
              <div>
                <div className="font-serif text-[28px] leading-none">3</div>
                <div className="mono mt-2">обжарки на выбор</div>
              </div>
              <div>
                <div className="font-serif text-[28px] leading-none">
                  08<span className="text-ink-3">—</span>21
                </div>
                <div className="mono mt-2">каждый день</div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative aspect-4/5 rounded-sm overflow-hidden bg-bg-3">
              <div
                className="w-full h-full relative flex items-end p-4"
                style={{
                  background: `repeating-linear-gradient(135deg, color-mix(in oklch, var(--ink) 8%, transparent) 0 2px, transparent 2px 14px), var(--bg-3)`,
                }}
              >
                <span className="font-mono text-[10px] tracking-[0.08em] uppercase text-ink-2 bg-bg px-2 py-1 rounded-sm">
                  фото · бариста за стойкой, утренний свет
                </span>
              </div>
              <div className="absolute right-4.5 top-4.5 w-27.5 h-27.5 rounded-full bg-accent text-paper grid place-items-center font-serif text-[15px] leading-[1.1] text-center p-[10px] rotate-[-8deg] shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--ink)_40%,transparent)]">
                <div>
                  <span className="font-mono text-[9px] tracking-widest uppercase block mb-0.5 opacity-75">сезон</span>
                  Весенние вкусы
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <div className="flex justify-between text-[13px] text-ink-3">
                <span className="mono">N 55.6614</span>
                <span className="mono">E 37.5542</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-b border-line-soft py-[18px] overflow-hidden mt-10 bg-bg">
        <div className="flex gap-16 whitespace-nowrap animate-[ticker-scroll_48s_linear_infinite] font-serif text-[34px] tracking-[-0.01em]">
          <span className="inline-flex items-center gap-16">
            Спешелти кофе <span className="text-accent text-[18px]">✦</span> Свежая выпечка каждое
            утро <span className="text-accent text-[18px]">✦</span> Своя обжарка{" "}
            <span className="text-accent text-[18px]">✦</span> Без спешки{" "}
            <span className="text-accent text-[18px]">✦</span> Программа лояльности{" "}
            <span className="text-accent text-[18px]">✦</span> Wi-Fi и розетки{" "}
            <span className="text-accent text-[18px]">✦</span>
          </span>
          <span className="inline-flex items-center gap-16">
            Спешелти кофе <span className="text-accent text-[18px]">✦</span> Свежая выпечка каждое
            утро <span className="text-accent text-[18px]">✦</span> Своя обжарка{" "}
            <span className="text-accent text-[18px]">✦</span> Без спешки{" "}
            <span className="text-accent text-[18px]">✦</span> Программа лояльности{" "}
            <span className="text-accent text-[18px]">✦</span> Wi-Fi и розетки{" "}
            <span className="text-accent text-[18px]">✦</span>
          </span>
        </div>
      </div>
    </section>
  );
}
