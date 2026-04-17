"use client";

const hour = '08:00 — 21:00'
const hours = [
  { label: "Пн", open: hour, dayIndex: 1 },
  { label: "Вт", open: hour, dayIndex: 2 },
  { label: "Ср", open: hour, dayIndex: 3 },
  { label: "Чт", open: hour, dayIndex: 4 },
  { label: "Пт", open: hour, dayIndex: 5 },
  { label: "Сб", open: hour, dayIndex: 6 },
  { label: "Вс", open: hour, dayIndex: 0 },
];

export default function Location() {
  const todayIndex = new Date().getDay();

  return (
    <section className="location-section" id="location">
      <div className="wrap">
        <div className="section-head">
          <div className="idx">§ 02 / ГДЕ МЫ</div>
          <h2>
            Во дворе, <em>за аркой</em>
          </h2>
          <div className="tail">
            Вход со стороны детской площадки, вывеска — жёлтая лампа.
          </div>
        </div>

        <div className="loc-grid">
          {/* Stylized map */}
          <div className="loc-map">
            <div className="map-label-tl">CHERYOMUSHKI · MOSCOW</div>
            <div className="map-grid" />
            <div className="map-road h1" />
            <div className="map-road h2" />
            <div className="map-road v1" />
            <div className="map-road v2" />
            <div className="map-pin">
              <div className="map-pin-dot">
                <span className="map-pin-pulse" />
              </div>
              <div className="map-pin-label">Конфидент</div>
            </div>
            <div className="map-compass">N</div>
          </div>

          {/* Info */}
          <div className="loc-info">
            <h3>
              ул. Гарибальди <em>23к2</em>
            </h3>
            <div className="loc-addr">
              Двор, зайти под арку между <br />
              пятиэтажек, первый подъезд слева.
              <br />
              <br />
              <span style={{ color: "var(--ink-3)", fontSize: "14px" }}>
                Метро Новые Черёмушки · 7 мин пешком
              </span>
            </div>

            <div className="hours">
              {hours.map((row) => {
                const isToday = row.dayIndex === todayIndex;
                return (
                  <div key={row.label} className={`hour-row${isToday ? " today" : ""}`}>
                    <span className="d">{row.label}</span>
                    <span className="h">{row.open}</span>
                    <span className={`status${isToday ? "" : ""}`}>
                      {isToday ? "сейчас открыто" : null}
                    </span>
                  </div>
                );
              })}
            </div>

            <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a href="#" className="pill">Построить маршрут →</a>
              <a href="tel:+74957770000" className="pill">+7 495 777 00 00</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
