import {Fragment} from 'react'

const SCROLL_ITEMS = [
  'Спешелти кофе',
  'Свежая выпечка каждое утро',
  'Без спешки',
  'Программа лояльности',
  'Розетки',
]

interface HeroProps {
  menuLength: number
}

export default function Hero({menuLength}: HeroProps) {
  return (
    <section className="relative pt-12 pb-16">
      <div className="wrap">
        <div className="grid grid-cols-[1.05fr_0.95fr] items-end gap-12 max-[900px]:grid-cols-1">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="bg-ink-3 h-px w-9" />
              <span className="mono">кофейня · с 2023 · бабушкинская</span>
            </div>

            <h1 className="text-ink font-serif text-[clamp(64px,9vw,140px)] leading-[0.92] font-normal tracking-[-0.03em]">
              Тихий
              <br />
              уголок для <em className="text-accent italic">своих</em>
            </h1>

            <p className="text-ink-2 mt-7 max-w-105 text-[17px] leading-normal">
              Маленькая кофейня в торговом центре. Медленное утро, знакомые лица
              и свежеобжаренные зёрна.
            </p>

            <div className="border-line-soft mt-10 grid max-w-130 grid-cols-3 gap-6 border-t pt-7 max-[560px]:grid-cols-2">
              <div>
                <div className="font-serif text-[28px] leading-none">
                  {menuLength}
                </div>
                <div className="mono mt-2">позиций в меню</div>
              </div>
              <div>
                <div className="font-serif text-[28px] leading-none">
                  08<span className="text-ink-3">—</span>21
                </div>
                <div className="mono mt-2">каждый день</div>
              </div>
            </div>
          </div>

          {/*<div>*/}
          {/*  <div className="bg-bg-3 relative aspect-4/5 overflow-hidden rounded-sm">*/}
          {/*    <div*/}
          {/*      className="relative flex h-full w-full items-end p-4"*/}
          {/*      style={{*/}
          {/*        background: `repeating-linear-gradient(135deg, color-mix(in oklch, var(--ink) 8%, transparent) 0 2px, transparent 2px 14px), var(--bg-3)`,*/}
          {/*      }}>*/}
          {/*      <span className="text-ink-2 bg-bg rounded-sm px-2 py-1 font-mono text-[10px] tracking-[0.08em] uppercase">*/}
          {/*        фото · бариста за стойкой, утренний свет*/}
          {/*      </span>*/}
          {/*    </div>*/}
          {/*    <div className="bg-accent text-paper absolute top-4.5 right-4.5 grid h-27.5 w-27.5 rotate-[-8deg] place-items-center rounded-full p-[10px] text-center font-serif text-[15px] leading-[1.1] shadow-[0_12px_40px_-12px_color-mix(in_oklch,var(--ink)_40%,transparent)]">*/}
          {/*      <div>*/}
          {/*        <span className="mb-0.5 block font-mono text-[9px] tracking-widest uppercase opacity-75">*/}
          {/*          сезон*/}
          {/*        </span>*/}
          {/*        Весенние вкусы*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}

          {/*  <div className="mt-4 flex flex-col gap-3">*/}
          {/*    <div className="text-ink-3 flex justify-between text-[13px]">*/}
          {/*      <span className="mono">N 55.6614</span>*/}
          {/*      <span className="mono">E 37.5542</span>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>

      <div className="border-line-soft bg-bg mt-10 overflow-hidden border-t border-b py-4.5">
        <div className="flex animate-[ticker-scroll_48s_linear_infinite] gap-16 font-serif text-[34px] tracking-[-0.01em] whitespace-nowrap">
          <span className="inline-flex items-center gap-16">
            {SCROLL_ITEMS.map(item => (
              <Fragment key={item}>
                {item}
                <span className="text-accent text-[18px]">✦</span>
              </Fragment>
            ))}
          </span>
          <span className="inline-flex items-center gap-16">
            {SCROLL_ITEMS.map(item => (
              <Fragment key={item}>
                {item}
                <span className="text-accent text-[18px]">✦</span>
              </Fragment>
            ))}
          </span>
        </div>
      </div>
    </section>
  )
}
