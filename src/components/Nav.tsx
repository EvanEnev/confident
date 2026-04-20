'use client'

import {useTheme} from './ThemeProvider'

export default function Nav() {
  const {theme, toggle} = useTheme()

  return (
    <nav className="bg-bg border-line-soft sticky top-0 z-50 border-b backdrop-blur-[10px] transition-colors duration-300">
      <div className="mx-auto flex max-w-350 items-center justify-between px-8 py-4">
        <div className="flex items-center gap-2.5">
          <div className="font-serif text-[22px] tracking-[-0.01em]">
            Конфидент
          </div>
        </div>

        <div className="flex gap-7 max-[900px]:hidden">
          <a
            href="#menu"
            className="text-ink-2 hover:text-accent text-sm transition-colors duration-200">
            Меню
          </a>
          <a
            href="#location"
            className="text-ink-2 hover:text-accent text-sm transition-colors duration-200">
            Где мы
          </a>
          <a
            href="#order"
            className="text-ink-2 hover:text-accent text-sm transition-colors duration-200">
            Заказать
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#location"
            className="border-line text-ink hover:bg-ink hover:text-bg hover:border-ink hidden cursor-pointer items-center gap-2 rounded-full border bg-transparent px-4 py-2.25 text-[13px] transition-all duration-200 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.16_145)] shadow-[0_0_0_4px_color-mix(in_oklch,oklch(0.65_0.16_145)_25%,transparent)]" />
            Открыто до 21:00
          </a>
          <a
            href="#order"
            className="bg-ink text-bg border-ink hover:bg-accent hover:border-accent hover:text-paper hidden items-center gap-2 rounded-full border px-4 py-2.25 text-[13px] transition-all duration-200 sm:inline-flex">
            Заказать онлайн →
          </a>
          <button
            className="border-line text-ink-2 hover:bg-ink hover:text-bg hover:border-ink grid h-9 w-9 cursor-pointer place-items-center rounded-full border bg-transparent text-base transition-all duration-200"
            onClick={toggle}
            aria-label="Toggle theme"
            title={theme === 'light' ? 'Тёмная тема' : 'Светлая тема'}>
            {theme === 'light' ? '☽' : '☀'}
          </button>
        </div>
      </div>
    </nav>
  )
}
