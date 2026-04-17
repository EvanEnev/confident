"use client";

import {useEffect, useState} from "react";

type Category = "all" | "espresso" | "milk" | "cold" | "signature";

interface Drink {
  cat: Exclude<Category, "all">;
  name: string;
  price: string;
  desc: string;
  tags: [string, string][];
}

const drinks: Drink[] = [
  { cat: "espresso", name: "Эспрессо",        price: "170", desc: "Двойная порция, наша house blend из Колумбии.",              tags: [["hot",  "горячий"]] },
  { cat: "espresso", name: "Ристретто",       price: "170", desc: "Короткий, концентрированный, на светлой обжарке.",           tags: [["hot",  "горячий"]] },
  { cat: "espresso", name: "Американо",       price: "210", desc: "Эспрессо, разбавленный горячей водой до 200 мл.",            tags: [["hot",  "горячий"]] },
  { cat: "milk",     name: "Флэт Уайт",       price: "280", desc: "Двойной эспрессо и бархатное молоко, 180 мл.",              tags: [["hot",  "горячий"], ["sig", "наше"]] },
  { cat: "milk",     name: "Капучино",        price: "260", desc: "Плотная пена, цельное или растительное молоко.",             tags: [["hot",  "горячий"]] },
  { cat: "milk",     name: "Раф на Груше",    price: "340", desc: "Фирменный раф со свежей грушей и щепоткой корицы.",         tags: [["hot",  "горячий"], ["sig", "сезон"]] },
  { cat: "cold",     name: "Колд Брю",        price: "290", desc: "14 часов медленной экстракции, подаём со льдом.",           tags: [["cold", "холодный"]] },
  { cat: "cold",     name: "Айс Латте",       price: "300", desc: "Эспрессо, лёд, молоко. Просто и по делу.",                  tags: [["cold", "холодный"]] },
  { cat: "cold",     name: "Эспрессо Тоник",  price: "320", desc: "Тоник, апельсиновая цедра, двойной эспрессо.",             tags: [["cold", "холодный"], ["sig", "наше"]] },
  { cat: "signature",name: "Банановый Латте", price: "360", desc: "Карамелизированный банан, молоко, светлая обжарка.",       tags: [["hot",  "горячий"], ["sig", "сезон"]] },
  { cat: "signature",name: "Какао Облачный",  price: "320", desc: "Бельгийское какао и солёная карамель на пенке.",           tags: [["hot",  "горячий"], ["sig", "сезон"]] },
  { cat: "signature",name: "Оранж Эспрессо",  price: "310", desc: "Эспрессо, апельсиновый сок, тростниковый сахар.",         tags: [["cold", "холодный"], ["sig", "сезон"]] },
];

export interface Tab { id: Category; label: string }

const tabs: Tab[] = [
  { id: "all",       label: "Всё" },
  { id: "espresso",  label: "Эспрессо" },
  { id: "milk",      label: "С молоком" },
  { id: "cold",      label: "Холодные" },
  { id: "signature", label: "Сезон" },
];

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
  if (drink.cat === "cold") return glassSvg;
  if (drink.cat === "milk") return mugSvg;
  return cupSvg;
}

export default function Menu() {
    // const [drinks, setDrinks] = useState<Drink[]>([])
    // const [tabs, setTabs] = useState<Tab[]>([])
    //
    // useEffect(() => {
    //     fetch('/api/getMenu').then(async (res) => {
    //         const data = await res.json()
    //
    //         setDrinks(data.drinks)
    //         setTabs(data.tabs)
    //     })
    // })

  const [active, setActive] = useState<Category>("all");

  const filtered = active === "all" ? drinks : drinks.filter((d) => d.cat === active);

  return (
    <section className="menu-section section" id="menu">
      <div className="wrap">
        <div className="section-head">
          <div className="idx">§ 01 / МЕНЮ</div>
          <h2>
            Что <em>нальём</em>
            <br />
            сегодня
          </h2>
          <div className="tail">
            Меняется по сезонам. Есть растительное молоко, авторские сиропы —
            всё своё.
          </div>
        </div>

        <div className="menu-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`menu-tab${active === tab.id ? " active" : ""}`}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filtered.map((drink, i) => (
            <article key={`${drink.name}-${i}`} className="drink" data-cat={drink.cat}>
              <div className="drink-top">
                <div>
                  <div className="drink-name">{drink.name}</div>
                </div>
                <div className="drink-illo">{iconFor(drink)}</div>
              </div>
              <div className="drink-desc">{drink.desc}</div>
              <div className="drink-foot">
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {drink.tags.map(([cls, label]) => (
                    <span key={cls} className={`tag ${cls}`}>
                      {label}
                    </span>
                  ))}
                </div>
                <div className="drink-price">{drink.price} ₽</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
