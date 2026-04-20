import Logo from '@/public/logo'

export default function Footer() {
  return (
    <footer className="border-line-soft bg-bg border-t pt-16 pb-8 transition-colors duration-300">
      <div className="wrap">
        <div className="mb-16 grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <Logo className="text-ink" />
            <div className="text-ink-3 mt-4 max-w-[320px] text-sm">
              Кофейня в спальном районе Москвы. <br />
              Кофе, выпечка, тихий угол — с 2023 года.
            </div>
          </div>

          <div>
            <h5 className="text-ink-3 mb-4 font-mono text-[10px] font-medium tracking-widest uppercase">
              Кофейня
            </h5>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <a
                  href="#menu"
                  className="text-ink-2 hover:text-accent text-sm transition-colors">
                  Меню
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  className="text-ink-2 hover:text-accent text-sm transition-colors">
                  Адрес и часы
                </a>
              </li>
              <li>
                <a
                  href="#order"
                  className="text-ink-2 hover:text-accent text-sm transition-colors">
                  Заказать
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-ink-3 mb-4 font-mono text-[10px] font-medium tracking-widest uppercase">
              Контакты
            </h5>
            <ul className="flex list-none flex-col gap-2.5">
              <li>
                <a
                  href="tel:+79689406948"
                  className="text-ink-2 hover:text-accent text-sm transition-colors">
                  +7 968 940 69 48
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@confident.su"
                  className="text-ink-2 hover:text-accent text-sm transition-colors">
                  support@confident.su
                </a>
              </li>
              <li className="text-ink-2 text-sm">
                Староватутинский проезд, 14
              </li>
            </ul>
          </div>

          {/*<div>*/}
          {/*  <h5 className="font-mono text-[10px] tracking-widest uppercase text-ink-3 mb-4 font-medium">Социальные</h5>*/}
          {/*  <ul className="list-none flex flex-col gap-2.5">*/}
          {/*    <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">Telegram</a></li>*/}
          {/*    <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">VK</a></li>*/}
          {/*    <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">YouTube</a></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>

        <div className="border-line-soft text-ink-3 flex justify-between border-t pt-6 text-xs">
          <span>© 2023—2026 Конфидент</span>
          <span className="mono">сделано с теплом · Москва</span>
        </div>
      </div>
    </footer>
  )
}
