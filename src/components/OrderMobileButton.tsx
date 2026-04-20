export default function OrderMobileButton() {
  return (
    <div className="fixed bottom-1 z-10000 w-full p-2 sm:hidden">
      <div className="bg-ink flex justify-center rounded-full p-4 px-6">
        <a
          href="#order"
          className="text-bg hover:border-ink inline-flex w-full cursor-pointer items-center justify-between gap-2 rounded-full transition-all duration-200">
          <span className="inline-flex items-center justify-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.65_0.16_145)] shadow-[0_0_0_4px_color-mix(in_oklch,oklch(0.65_0.16_145)_25%,transparent)]" />
            Открыто до 21:00 · Заказать
          </span>
          <span>→</span>
        </a>
      </div>
    </div>
  )
}
