export default function Footer() {
  return (
    <footer className="border-t border-line-soft pt-16 pb-8 bg-bg transition-colors duration-300">
      <div className="wrap">
        <div className="grid grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-16 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          <div>
            <div className="font-serif text-[72px] leading-[0.9] tracking-[-0.02em]">
              Кон-<br />фи<em className="italic text-accent">дент</em>.
            </div>
            <div className="mt-4 text-ink-3 max-w-[320px] text-sm">
              Кофейня в спальном районе Москвы. Зёрна, выпечка, тихий угол у
              окна — с 2019 года.
            </div>
          </div>

          <div>
            <h5 className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-3 mb-4 font-medium">Кофейня</h5>
            <ul className="list-none flex flex-col gap-[10px]">
              <li><a href="#menu"     className="text-sm text-ink-2 transition-colors hover:text-accent">Меню</a></li>
              <li><a href="#beans"    className="text-sm text-ink-2 transition-colors hover:text-accent">Зёрна</a></li>
              <li><a href="#location" className="text-sm text-ink-2 transition-colors hover:text-accent">Адрес и часы</a></li>
              <li><a href="#order"    className="text-sm text-ink-2 transition-colors hover:text-accent">Заказать</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-3 mb-4 font-medium">Контакты</h5>
            <ul className="list-none flex flex-col gap-[10px]">
              <li><a href="tel:+74957770000"        className="text-sm text-ink-2 transition-colors hover:text-accent">+7 495 777 00 00</a></li>
              <li><a href="mailto:hi@konfident.cafe" className="text-sm text-ink-2 transition-colors hover:text-accent">hi@konfident.cafe</a></li>
              <li className="text-sm text-ink-2">ул. Гарибальди 23к2</li>
            </ul>
          </div>

          <div>
            <h5 className="font-mono text-[10px] tracking-[0.1em] uppercase text-ink-3 mb-4 font-medium">Социальные</h5>
            <ul className="list-none flex flex-col gap-[10px]">
              <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">Telegram</a></li>
              <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">VK</a></li>
              <li><a href="#" className="text-sm text-ink-2 transition-colors hover:text-accent">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-line-soft flex justify-between text-xs text-ink-3">
          <span>© 2019—2026 Конфидент</span>
          <span className="mono">сделано с теплом · Москва</span>
        </div>
      </div>
    </footer>
  );
}
