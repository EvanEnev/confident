export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div>
            <div className="foot-mark">
              Кон-<br />фи<em>дент</em>.
            </div>
            <div className="foot-tag">
              Кофейня в спальном районе Москвы. Зёрна, выпечка, тихий угол у
              окна — с 2019 года.
            </div>
          </div>

          <div className="foot-col">
            <h5>Кофейня</h5>
            <ul>
              <li><a href="#menu">Меню</a></li>
              <li><a href="#beans">Зёрна</a></li>
              <li><a href="#location">Адрес и часы</a></li>
              <li><a href="#order">Заказать</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Контакты</h5>
            <ul>
              <li><a href="tel:+74957770000">+7 495 777 00 00</a></li>
              <li><a href="mailto:hi@konfident.cafe">hi@konfident.cafe</a></li>
              <li>ул. Гарибальди 23к2</li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Социальные</h5>
            <ul>
              <li><a href="#">Telegram</a></li>
              <li><a href="#">VK</a></li>
              <li><a href="#">YouTube</a></li>
            </ul>
          </div>
        </div>

        <div className="foot-bot">
          <span>© 2019—2026 Конфидент</span>
          <span className="mono">сделано с теплом · Москва</span>
        </div>
      </div>
    </footer>
  );
}
