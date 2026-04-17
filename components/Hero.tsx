export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-grid">
          <div>
            <div className="hero-kicker">
              <span className="kicker-line" />
              <span className="mono">кофейня · с 2019 · черёмушки</span>
            </div>

            <h1 className="hero-title">
              Тихий<br />
              уголок для <em>своих</em>
            </h1>

            <p className="hero-sub">
              Маленькая кофейня во дворе между пятиэтажек. Медленное утро,
              знакомые лица, свежеобжаренные зёрна и окно, в которое хорошо
              смотреть.
            </p>

            <div className="hero-meta">
              <div>
                <div className="k">14</div>
                <div className="mono l">позиций в меню</div>
              </div>
              <div>
                <div className="k">3</div>
                <div className="mono l">обжарки на выбор</div>
              </div>
              <div>
                <div className="k">
                  07<span style={{ color: "var(--ink-3)" }}>—</span>22
                </div>
                <div className="mono l">каждый день</div>
              </div>
            </div>
          </div>

          {/* Right column */}
          <div>
            <div className="hero-visual">
              <div className="ph">
                <span className="ph-label">
                  фото · бариста за стойкой, утренний свет
                </span>
              </div>
              <div className="hero-badge">
                <div>
                  <span className="sm">сезон</span>
                  Груша&nbsp;&amp;<br />корица
                </div>
              </div>
            </div>

            <div className="hero-side">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "13px",
                  color: "var(--ink-3)",
                }}
              >
                <span className="mono">N 55.6614</span>
                <span className="mono">E 37.5542</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="ticker">
        <div className="ticker-track">
          <span>
            Спешелти кофе <span className="bul">✦</span> Свежая выпечка каждое
            утро <span className="bul">✦</span> Своя обжарка{" "}
            <span className="bul">✦</span> Без спешки{" "}
            <span className="bul">✦</span> Программа лояльности{" "}
            <span className="bul">✦</span> Wi-Fi и розетки{" "}
            <span className="bul">✦</span>
          </span>
          <span>
            Спешелти кофе <span className="bul">✦</span> Свежая выпечка каждое
            утро <span className="bul">✦</span> Своя обжарка{" "}
            <span className="bul">✦</span> Без спешки{" "}
            <span className="bul">✦</span> Программа лояльности{" "}
            <span className="bul">✦</span> Wi-Fi и розетки{" "}
            <span className="bul">✦</span>
          </span>
        </div>
      </div>
    </section>
  );
}
