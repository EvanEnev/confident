export default function OrderCTA() {
  return (
    <section className="order-cta" id="order">
      <div className="wrap">
        <div className="cta-card">
          <div>
            <div
              className="mono"
              style={{
                marginBottom: "20px",
                color: "color-mix(in oklch, var(--bg) 60%, transparent)",
              }}
            >
              § 03 / ЗАКАЗАТЬ
            </div>
            <h3>
              Ваш кофе —<br />
              <em>ждёт в окне</em>
              <br />
              через 8 минут.
            </h3>
          </div>

          <div className="cta-side">
            <p>
              Закажите онлайн — заберите без очереди. Или привезём курьером по
              району.
            </p>
            <div className="cta-apps">
              <button className="app-btn app-btn-primary">
                <span>Заказать на сайте</span>
                <span className="arr">→</span>
              </button>
              <button className="app-btn">
                <span>Яндекс Еда</span>
                <span className="arr">↗</span>
              </button>
              <button className="app-btn">
                <span>Delivery Club</span>
                <span className="arr">↗</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
