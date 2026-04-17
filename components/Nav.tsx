"use client";

import { useTheme } from "./ThemeProvider";

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <nav className="nav">
      <div className="nav-inner">
        <div className="logo">
          <div className="logo-mark">к</div>
          <div className="logo-word">Конфидент</div>
        </div>

        <div className="nav-links">
          <a href="#menu">Меню</a>
          <a href="#beans">Зёрна</a>
          <a href="#location">Где мы</a>
          <a href="#order">Заказать</a>
        </div>

        <div className="nav-right">
          <span className="pill">
            <span className="dot" />
            Открыто до 22:00
          </span>
          <a href="#order" className="pill solid">
            Заказать онлайн →
          </a>
          <button
            className="theme-toggle"
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
