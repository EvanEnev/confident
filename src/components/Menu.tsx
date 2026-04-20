'use client'

import {useState} from 'react'

type Category = number

interface Drink {
  cat: Exclude<Category, 'all'>
  name: string
  price: string
  desc: string
  tags: [string, string][]
}

export interface Tab {
  id: Category
  label: string
}

const cupSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 14c.83 .642 2.077 1.017 3.5 1c1.423 .017 2.67 -.358 3.5 -1c.83 -.642 2.077 -1.017 3.5 -1c1.423 -.017 2.67 .358 3.5 1" />
    <path d="M8 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M12 3a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M3 10h14v5a6 6 0 0 1 -6 6h-2a6 6 0 0 1 -6 -6v-5" />
    <path d="M16.746 16.726a3 3 0 1 0 .252 -5.555" />
  </svg>
)

const saladSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1" />
    <path d="M18.5 11c.351 -1.017 .426 -2.236 .5 -3.714v-1.286h-2.256c-2.83 0 -4.616 .804 -5.64 2.076" />
    <path d="M5.255 11.008a12.204 12.204 0 0 1 -.255 -2.008v-1h1.755c.98 0 1.801 .124 2.479 .35" />
    <path d="M8 8l1 -4l4 2.5" />
    <path d="M13 11v-.5a2.5 2.5 0 1 0 -5 0v.5" />
  </svg>
)

const glassSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M17.95 9l-1.478 8.69c-.25 1.463 -.374 2.195 -.936 2.631c-1.2 .931 -6.039 .88 -7.172 0c-.562 -.436 -.687 -1.168 -.936 -2.632l-1.478 -8.689" />
    <path d="M6 9l.514 -1.286a5.908 5.908 0 0 1 10.972 0l.514 1.286" />
    <path d="M5 9h14" />
    <path d="M12 9l4 -7" />
    <path d="M7 14c.593 .642 1.484 1.017 2.5 1c1.016 .017 1.907 -.358 2.5 -1s1.484 -1.017 2.5 -1c1.016 -.017 1.907 .358 2.5 1" />
  </svg>
)

const foodSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1" />
    <path d="M12 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M16 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
    <path d="M8 4a2.4 2.4 0 0 0 -1 2a2.4 2.4 0 0 0 1 2" />
  </svg>
)

function iconFor(drink: Drink) {
  if (drink.tags.find(d => d[0] === 'cold')) return glassSvg
  if (drink.tags.find(d => d[0] === 'hot')) return cupSvg
  if (drink.tags.find(d => d[0] === 'dish')) return foodSvg
  if (drink.tags.find(d => d[0] === 'salad')) return saladSvg
  return null
}
interface MenuProps {
  categories: Tab[]
  dishes: Drink[]
}

export default function Menu({categories: tabs, dishes: drinks}: MenuProps) {
  const [active, setActive] = useState<Category>(96)

  const filtered = drinks.filter(d => d.cat === active)

  return (
    <section
      className="bg-paper border-line-soft border-t border-b py-24 transition-colors duration-300"
      id="menu">
      <div className="wrap">
        <div className="border-line-soft mb-7 grid grid-cols-[180px_1fr_auto] items-baseline gap-8 border-b pb-7 max-[900px]:grid-cols-1 max-[900px]:gap-3 sm:mb-14">
          <div className="mono">§ 01 / МЕНЮ</div>
          <h2 className="font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal tracking-[-0.02em]">
            Что <em className="text-accent italic">нальём</em>
            <br />
            сегодня
          </h2>
          <div className="text-ink-3 max-w-70 text-right text-sm max-[900px]:max-w-none max-[900px]:text-left">
            Есть растительное молоко и сиропы.
          </div>
        </div>

        <div className="scrollbar-none sm:bg-bg border-line-soft mb-8 flex min-h-10 w-fit max-w-full min-w-50 gap-1.5 overflow-x-auto rounded-full p-1 sm:gap-0.5 sm:border">
          {tabs.map(tab => (
            <button
              key={tab.id}
              className={`cursor-pointer rounded-full px-4 py-2 font-sans text-[13px] whitespace-nowrap transition-all duration-200 ${
                active === tab.id
                  ? 'bg-ink text-bg'
                  : 'text-ink-2 hover:text-ink border-line-soft border bg-transparent sm:border-none'
              }`}
              onClick={() => setActive(tab.id)}>
              {tab.label}
            </button>
          ))}
        </div>

        <div className="border-line-soft grid grid-cols-12 border-t">
          {filtered.map((drink, i) => (
            <article
              key={`${drink.name}-${i}`}
              className="group border-line-soft hover:bg-bg relative col-span-4 flex cursor-pointer flex-col gap-4 border-r border-b p-7 px-6 transition-colors duration-250 nth-[3n]:border-r-0 max-[900px]:col-span-6 max-[900px]:nth-[2n]:border-r-0 max-[900px]:nth-[3n]:border-r max-[560px]:col-span-12 max-[560px]:border-r-0!"
              data-cat={drink.cat}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-serif text-[28px] leading-[1.05] tracking-[-0.01em]">
                    {drink.name}
                  </div>
                </div>
                <div className="text-ink-2 grid h-18 w-14 shrink-0 place-items-center">
                  {iconFor(drink)}
                </div>
              </div>
              <div className="text-ink-3 text-[13.5px] leading-normal">
                {drink.desc}
              </div>
              <div className="border-line-soft mt-auto flex items-center justify-between border-t border-dashed pt-3">
                <div className="flex flex-col gap-2.5">
                  {drink.tags.map(([cls, label]) => (
                    <span key={cls} className={`tag ${cls}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="text-ink-2 group-hover:text-accent font-serif text-[22px] whitespace-nowrap transition-colors duration-200">
                  {drink.price} ₽
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
