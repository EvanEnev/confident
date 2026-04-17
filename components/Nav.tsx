"use client";

import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-[10px] bg-[color-mix(in_oklch,var(--bg)_82%,transparent)] border-b border-line-soft transition-colors duration-300">
      <div className="flex items-center justify-between px-8 py-4 max-w-[1400px] mx-auto">
        <div className="flex items-center gap-[10px]">
          <div className="logo-mark w-[30px] h-[30px] rounded-full bg-ink relative grid place-items-center text-bg font-serif text-[20px] leading-none transition-colors duration-300">
            к
          </div>
          <div className="font-serif text-[22px] tracking-[-0.01em]">Конфидент</div>
        </div>

        <div className="flex gap-7 max-[900px]:hidden">
          <a href="#menu"     className="text-sm text-ink-2 transition-colors duration-200 hover:text-accent">Меню</a>
          <a href="#beans"    className="text-sm text-ink-2 transition-colors duration-200 hover:text-accent">Зёрна</a>
          <a href="#location" className="text-sm text-ink-2 transition-colors duration-200 hover:text-accent">Где мы</a>
          <a href="#order"    className="text-sm text-ink-2 transition-colors duration-200 hover:text-accent">Заказать</a>
        </div>

        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 py-[9px] px-4 rounded-full border border-line text-[13px] transition-all duration-200 cursor-pointer bg-transparent text-ink hover:bg-ink hover:text-bg hover:border-ink">
            <span className="w-1.5 h-1.5 rounded-full bg-[oklch(0.65_0.16_145)] shadow-[0_0_0_4px_color-mix(in_oklch,oklch(0.65_0.16_145)_25%,transparent)]" />
            Открыто до 21:00
          </span>
          <a href="#order" className="inline-flex items-center gap-2 py-[9px] px-4 rounded-full border text-[13px] transition-all duration-200 bg-ink text-bg border-ink hover:bg-accent hover:border-accent hover:text-paper">
            Заказать онлайн →
          </a>
          <button
            className="grid place-items-center w-9 h-9 rounded-full border border-line bg-transparent text-ink-2 cursor-pointer transition-all duration-200 text-base hover:bg-ink hover:text-bg hover:border-ink"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === "light" ? "Тёмная тема" : "Светлая тема"}
          >
            {theme === "light" ? "☽" : "☀"}
          </button>
        </div>
      </div>
    </nav>
  );
}
