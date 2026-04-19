"use client";

import {useEffect, useState} from "react";

type Category = number;

interface Drink {
  cat: Exclude<Category, "all">;
  name: string;
  price: string;
  desc: string;
  tags: [string, string][];
}

// const drinks: Drink[] = [
//   { cat: "espresso", name: "Эспрессо",        price: "170", desc: "Двойная порция, наша house blend из Колумбии.",              tags: [["hot",  "горячий"]] },
//   { cat: "espresso", name: "Ристретто",       price: "170", desc: "Короткий, концентрированный, на светлой обжарке.",           tags: [["hot",  "горячий"]] },
//   { cat: "espresso", name: "Американо",       price: "210", desc: "Эспрессо, разбавленный горячей водой до 200 мл.",            tags: [["hot",  "горячий"]] },
//   { cat: "milk",     name: "Флэт Уайт",       price: "280", desc: "Двойной эспрессо и бархатное молоко, 180 мл.",              tags: [["hot",  "горячий"], ["sig", "наше"]] },
//   { cat: "milk",     name: "Капучино",        price: "260", desc: "Плотная пена, цельное или растительное молоко.",             tags: [["hot",  "горячий"]] },
//   { cat: "milk",     name: "Раф на Груше",    price: "340", desc: "Фирменный раф со свежей грушей и щепоткой корицы.",         tags: [["hot",  "горячий"], ["sig", "сезон"]] },
//   { cat: "cold",     name: "Колд Брю",        price: "290", desc: "14 часов медленной экстракции, подаём со льдом.",           tags: [["cold", "холодный"]] },
//   { cat: "cold",     name: "Айс Латте",       price: "300", desc: "Эспрессо, лёд, молоко. Просто и по делу.",                  tags: [["cold", "холодный"]] },
//   { cat: "cold",     name: "Эспрессо Тоник",  price: "320", desc: "Тоник, апельсиновая цедра, двойной эспрессо.",             tags: [["cold", "холодный"], ["sig", "наше"]] },
//   { cat: "signature",name: "Банановый Латте", price: "360", desc: "Карамелизированный банан, молоко, светлая обжарка.",       tags: [["hot",  "горячий"], ["sig", "сезон"]] },
//   { cat: "signature",name: "Какао Облачный",  price: "320", desc: "Бельгийское какао и солёная карамель на пенке.",           tags: [["hot",  "горячий"], ["sig", "сезон"]] },
//   { cat: "signature",name: "Оранж Эспрессо",  price: "310", desc: "Эспрессо, апельсиновый сок, тростниковый сахар.",         tags: [["cold", "холодный"], ["sig", "сезон"]] },
// ];

export interface Tab { id: Category; label: string }

// const tabs: Tab[] = [
//   { id: "all",       label: "Всё" },
//   { id: "espresso",  label: "Эспрессо" },
//   { id: "milk",      label: "С молоком" },
//   { id: "cold",      label: "Холодные" },
//   { id: "signature", label: "Сезон" },
// ];

const cupSvg = (
  <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 22 H54 L50 74 Q50 78 46 78 H18 Q14 78 14 74 Z" stroke="currentColor" strokeWidth="1.3" />
    <path d="M54 32 Q62 32 62 42 Q62 52 54 52" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <ellipse cx="32" cy="22" rx="22" ry="4" stroke="currentColor" strokeWidth="1.3" />
    <path d="M22 12 Q22 6 26 6" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
    <path d="M32 12 Q32 4 36 4" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
    <path d="M42 12 Q42 6 46 6" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
  </svg>
);

const glassSvg = (
  <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 14 H50 L46 74 Q46 78 42 78 H22 Q18 78 18 74 Z" stroke="currentColor" strokeWidth="1.3" />
    <line x1="16" y1="32" x2="48" y2="32" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    <rect x="22" y="38" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="32" y="46" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
    <rect x="24" y="54" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="1" opacity="0.5" />
  </svg>
);

const mugSvg = (
  <svg viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="22" width="40" height="52" rx="4" stroke="currentColor" strokeWidth="1.3" />
    <path d="M50 32 Q60 32 60 44 Q60 56 50 56" stroke="currentColor" strokeWidth="1.3" fill="none" />
    <ellipse cx="30" cy="22" rx="20" ry="3.5" stroke="currentColor" strokeWidth="1.3" />
    <line x1="14" y1="40" x2="46" y2="40" stroke="currentColor" strokeWidth="0.8" opacity="0.3" />
  </svg>
);

function iconFor(drink: Drink) {
  // if (drink.cat === "cold") return glassSvg;
  // if (drink.cat === "milk") return mugSvg;
  return cupSvg;
}

export default function Menu() {
  const [active, setActive] = useState<Category>(96);
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [tabs, setTabs] = useState<Tab[]>([]);

    useEffect(() => {
        fetch('/api/getMenu').then(async res => {
            const {dishes, categories} = await res.json()
            setDrinks(dishes)
            setTabs(categories)
        })
    }, []);

  const filtered = drinks.filter((d) => d.cat === active);

  return (
    <section className="py-24 bg-paper border-t border-b border-line-soft transition-colors duration-300" id="menu">
      <div className="wrap">
        <div className="grid grid-cols-[180px_1fr_auto] gap-8 items-baseline mb-7 sm:mb-14 pb-7 border-b border-line-soft max-[900px]:grid-cols-1 max-[900px]:gap-3">
          <div className="mono">§ 01 / МЕНЮ</div>
          <h2 className="font-serif font-normal text-[clamp(40px,5vw,64px)] leading-none tracking-[-0.02em]">
            Что <em className="italic text-accent">нальём</em>
            <br />
            сегодня
          </h2>
          <div className="text-sm text-ink-3 max-w-70 text-right max-[900px]:text-left max-[900px]:max-w-none">
            Есть растительное молоко и сиропы.
          </div>
        </div>

        <div className="scrollbar-none overflow-x-auto max-w-full flex gap-1.5 sm:gap-0.5 mb-8 p-1 sm:bg-bg rounded-full w-fit min-h-10 sm:border border-line-soft">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 whitespace-nowrap py-2 rounded-full text-[13px] cursor-pointer transition-all duration-200 font-sans ${
                active === tab.id
                  ? "bg-ink text-bg"
                  : "text-ink-2 sm:border-none bg-transparent hover:text-ink border border-line-soft"
              }`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-12 border-t border-line-soft">
          {filtered.map((drink, i) => (
            <article
              key={`${drink.name}-${i}`}
              className="group col-span-4 p-7 px-6 border-r border-b border-line-soft relative flex flex-col gap-4 transition-colors duration-[250ms] cursor-pointer hover:bg-bg [&:nth-child(3n)]:border-r-0 max-[900px]:col-span-6 max-[900px]:[&:nth-child(3n)]:border-r max-[900px]:[&:nth-child(2n)]:border-r-0 max-[560px]:col-span-12 max-[560px]:!border-r-0"
              data-cat={drink.cat}
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <div className="font-serif text-[28px] leading-[1.05] tracking-[-0.01em]">{drink.name}</div>
                </div>
                <div className="w-14 h-18 shrink-0 grid place-items-center text-ink-2">{iconFor(drink)}</div>
              </div>
              <div className="text-[13.5px] text-ink-3 leading-normal">{drink.desc}</div>
              <div className="flex justify-between items-center pt-3 border-t border-dashed border-line-soft mt-auto">
                <div className="flex gap-2.5 flex-wrap">
                  {drink.tags.map(([cls, label]) => (
                    <span key={cls} className={`tag ${cls}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="font-serif text-[22px] text-ink-2 transition-colors duration-200 whitespace-nowrap group-hover:text-accent">
                  {drink.price} ₽
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
