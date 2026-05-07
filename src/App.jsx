import React, { useState } from "react";
import {
  Flame,
  Snowflake,
  ShieldCheck,
  Wrench,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Menu,
  X,
  Gauge,
  Droplets,
  Fan,
  FileText,
  Home,
  Building2,
  Mail,
} from "lucide-react";

const companyContacts = {
  name: "ООО «ТЕПЛОСФЕРА»",
  shortName: "ТеплоСфера",
  phone: "+7 (999) 999-99-99",
  phoneHref: "tel:+79999999999",
  email: "info@teplosfera55.ru",
  emailHref: "mailto:info@teplosfera55.ru",
  address: "644007, Омская область, г. Омск, ул. Чернышевского, 21, этаж 1",
  region: "Омск и Омская область",
  ogrn: "1265500001997",
  inn: "5503282865",
  kpp: "550301001",
};

const packages = [
  {
    title: "Тёплый дом",
    icon: <Flame />,
    text: "Диагностика котла, промывка теплообменника, промывка системы отопления, проверка насосов, радиаторов и давления.",
  },
  {
    title: "Безопасный газ",
    icon: <ShieldCheck />,
    text: "Осмотр газового оборудования, ремонт котла или колонки, проверка автоматики, установка датчика газа, вентиляция и дымоход.",
  },
  {
    title: "Климат дома",
    icon: <Snowflake />,
    text: "Чистка кондиционеров, антибактериальная обработка, проверка дренажа, дозаправка и ремонт сплит-систем.",
  },
  {
    title: "Инженерный дом под ключ",
    icon: <Home />,
    text: "Отопление, водоснабжение, канализация, автоматика, сервис и сопровождение инженерных систем.",
  },
];

const navigationItems = [
  ["Главная", "#top"],
  ["Услуги", "#services"],
  ["Пакеты", "#packages"],
  ["Прайс", "#price"],
  ["Контакты", "#contacts"],
];

const heroAdvantages = [
  ["15", "обученных специалистов"],
  ["Омск", "и Омская область"],
  ["4 направления", "газ, отопление, климат и инженерные системы"],
];

const masterReasons = [
  "котёл плохо греет",
  "падает давление",
  "шумит насос",
  "забился теплообменник",
  "кондиционер плохо охлаждает",
  "нужен осмотр газового оборудования",
];

const priceCategories = [
  {
    title: "Газовое оборудование",
    items: [
      ["Диагностика газового котла", "от 1 500 ₽"],
      ["Техническое обслуживание настенного котла", "от 3 500 ₽"],
      ["Ремонт газовой колонки", "от 2 500 ₽"],
      ["Проверка автоматики безопасности", "от 1 800 ₽"],
      ["Осмотр газового оборудования", "от 1 500 ₽"],
    ],
  },
  {
    title: "Отопление",
    items: [
      ["Диагностика системы отопления", "от 2 000 ₽"],
      ["Замена радиатора отопления", "от 4 000 ₽"],
      ["Балансировка радиаторов", "от 2 500 ₽"],
      ["Установка циркуляционного насоса", "от 4 500 ₽"],
      ["Удаление воздуха из системы", "от 1 500 ₽"],
    ],
  },
  {
    title: "Промывка систем отопления",
    items: [
      ["Промывка системы отопления", "от 6 000 ₽"],
      ["Импульсная промывка отопления водой", "от 8 000 ₽"],
      ["Промывка теплообменника котла", "от 4 000 ₽"],
      ["Опрессовка системы отопления", "от 4 000 ₽"],
      ["Диагностика засора теплообменника", "от 2 500 ₽"],
    ],
  },
  {
    title: "Кондиционеры",
    items: [
      ["Чистка кондиционера", "от 2 500 ₽"],
      ["Антибактериальная обработка кондиционера", "от 1 500 ₽"],
      ["Дозаправка кондиционера", "от 2 500 ₽"],
      ["Ремонт сплит-системы", "от 3 000 ₽"],
      ["Проверка дренажа кондиционера", "от 1 500 ₽"],
    ],
  },
  {
    title: "Водоснабжение и канализация",
    items: [
      ["Монтаж водоснабжения", "от 5 000 ₽"],
      ["Ремонт водоснабжения", "от 2 500 ₽"],
      ["Монтаж канализации", "от 4 500 ₽"],
      ["Прочистка канализации", "от 2 500 ₽"],
      ["Установка фильтра воды", "от 2 500 ₽"],
    ],
  },
  {
    title: "Инженерные работы",
    items: [
      ["Монтаж системы отопления под ключ", "от 45 000 ₽"],
      ["Установка бойлера", "от 5 000 ₽"],
      ["Замена запорной арматуры", "от 1 800 ₽"],
      ["Монтаж группы безопасности", "от 3 000 ₽"],
      ["Проектная консультация по инженерным системам", "от 3 000 ₽"],
    ],
  },
];

function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <a className="brand" href="#top" onClick={closeMenu}>
        <span className="logoMark logoImageWrap">
          <img src="/logo.png" alt="ТеплоСфера" className="siteLogo" />
        </span>

        <span className="brandText">
          <b>
            <span className="warm">Тепло</span>
            <span className="cold">Сфера</span>
          </b>
          <small>ВДГО · отопление · климат</small>
        </span>
      </a>

      <nav className={open ? "nav open" : "nav"} aria-label="Основное меню">
        {navigationItems.map(([label, href]) => (
          <a href={href} onClick={closeMenu} key={href}>
            {label}
          </a>
        ))}
      </nav>

      <div className="headerActions">
        <a className="callMasterBtn" href={companyContacts.phoneHref}>
          <Phone size={18} />
          Вызвать мастера
        </a>

        <button
          className="menuBtn"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Меню"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

function App() {
  return (
    <div id="top">
      <Header />

      <main>
        <section className="hero">
          <div className="heroText">
            <div className="badge">
              <ShieldCheck size={18} />
              {companyContacts.region}
            </div>

            <h1>Газ, отопление и климат в доме — под контролем</h1>

            <p className="heroLead">
              Выезд мастера по Омску и области: диагностика, ремонт, обслуживание
              газового оборудования, отопления и кондиционеров.
            </p>

            <div className="heroActions">
              <a className="primary" href={companyContacts.phoneHref}>
                <Phone size={18} />
                Вызвать мастера
              </a>

              <a className="secondary" href="#price">
                <FileText size={18} />
                Посмотреть прайс
              </a>
            </div>

            <div className="stats">
              {heroAdvantages.map(([value, label]) => (
                <div key={value}>
                  <b>{value}</b>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="heroCard">
            <span className="heroCardLabel">Сигналы для выезда</span>
            <h3>Когда нужно вызвать мастера</h3>

            <p>
              Не ждите аварии: мастер проверит оборудование, найдёт причину
              неисправности и предложит безопасное решение.
            </p>

            <ul>
              {masterReasons.map((reason) => (
                <li key={reason}>
                  <CheckCircle2 />
                  {reason}
                </li>
              ))}
            </ul>

            <a className="heroCardBtn" href={companyContacts.phoneHref}>
              <Phone size={18} />
              Вызвать мастера
            </a>
          </div>
        </section>

        <section className="section servicesOverview" id="services">
          <div className="sectionTitle">
            <span>Услуги</span>
            <h2>Комплексное обслуживание инженерии дома</h2>
            <p>
              Приезжаем на диагностику, ремонт, профилактику и сезонную настройку систем,
              чтобы в доме стабильно работали газ, отопление, вода и климат.
            </p>
          </div>

          <div className="serviceGrid">
            <div><Flame /> Газовые котлы и колонки</div>
            <div><ShieldCheck /> Проверка безопасности газа</div>
            <div><Droplets /> Отопление и водоснабжение</div>
            <div><Fan /> Кондиционеры и вентиляция</div>
          </div>
        </section>

        <section className="section" id="packages">
          <div className="sectionTitle">
            <span>Пакеты</span>
            <h2>Пакеты обслуживания</h2>
            <p>
              Четыре понятных направления для клиента: тепло, газ, климат и инженерные системы.
            </p>
          </div>

          <div className="cards">
            {packages.map((item) => (
              <article className="card" key={item.title}>
                <div className="icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split">
          <div>
            <span className="eyebrow">Почему удобно</span>
            <h2>Один подрядчик для тепла, газа и климата</h2>

            <p>
              Клиенту не нужно искать разных мастеров. ТеплоСфера закрывает диагностику,
              профилактику, ремонт, промывку, настройку оборудования и инженерные рекомендации.
            </p>

            <div className="featureList">
              <div><Wrench /> Ремонт и обслуживание оборудования</div>
              <div><Gauge /> Проверка давления и автоматики</div>
              <div><Droplets /> Промывка отопления и теплообменников</div>
              <div><Fan /> Кондиционеры и климат дома</div>
            </div>
          </div>

          <div className="notice">
            <h3>Важно по газовому оборудованию</h3>
            <p>
              Газовые работы выполняются с соблюдением требований безопасности.
              При необходимости оформляется уведомление специализированной организации
              или взаимодействие с ГРО.
            </p>
          </div>
        </section>

        <section className="section priceSection" id="price">
          <div className="sectionTitle">
            <span>Прайс</span>
            <h2>Прайс на основные работы</h2>
            <p>
              Собрали популярные услуги по категориям, чтобы вы быстро
              сориентировались по бюджету перед выездом мастера.
            </p>
          </div>

          <div className="priceGrid">
            {priceCategories.map((category) => (
              <article className="priceCategory" key={category.title}>
                <div className="priceCategoryHead">
                  <h3>{category.title}</h3>
                  <span>{category.items.length} услуг</span>
                </div>

                <div className="priceRows">
                  {category.items.map(([service, price]) => (
                    <div className="priceRow" key={service}>
                      <span>{service}</span>
                      <b>{price}</b>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="priceNote">
            <p>
              Итоговая стоимость зависит от состояния оборудования, удалённости
              объекта и объёма работ.
            </p>

            <a className="primary" href={companyContacts.phoneHref}>
              <Phone size={18} />
              Получить расчёт
            </a>
          </div>
        </section>

        <section className="section about" id="about">
          <div>
            <span className="eyebrow">О компании</span>
            <h2>ООО «ТеплоСфера»</h2>

            <p>
              Инженерная сервисная организация для работ в Омске и Омской области.
              Основной фокус — безопасность, тепло, исправное оборудование и прозрачная цена.
            </p>

            <div className="aboutBadges">
              <span>ВДГО / ВКГО</span>
              <span>Котлы</span>
              <span>Отопление</span>
              <span>Кондиционеры</span>
              <span>Инженерные системы</span>
            </div>
          </div>

          <div className="requisites">
            <h3>Реквизиты</h3>

            <p className="companyName">
              <Building2 size={18} />
              <b>{companyContacts.name}</b>
            </p>

            <p><b>ОГРН:</b> {companyContacts.ogrn}</p>
            <p><b>ИНН:</b> {companyContacts.inn}</p>
            <p><b>КПП:</b> {companyContacts.kpp}</p>
            <p><b>Адрес:</b> {companyContacts.address}</p>
          </div>
        </section>

        <section className="contacts" id="contacts">
          <div className="contactsHeader">
            <span className="eyebrow">Контакты и заявка</span>
            <h2>Вызвать мастера</h2>
            <p>
              Оставьте заявку на диагностику, ремонт или обслуживание. Мы работаем
              по Омску и Омской области с газом, отоплением, климатом и инженерными системами.
            </p>
          </div>

          <div className="requestPanel">
            <form className="requestForm" onSubmit={(event) => event.preventDefault()}>
              <div className="formGrid">
                <label>
                  <span>Имя</span>
                  <input type="text" name="name" placeholder="Как к вам обращаться" required />
                </label>

                <label>
                  <span>Телефон</span>
                  <input type="tel" name="phone" placeholder="+7 ___ ___-__-__" required />
                </label>

                <label className="formWide">
                  <span>Адрес</span>
                  <input type="text" name="address" placeholder="Город, улица, дом, квартира" required />
                </label>

                <label className="formWide">
                  <span>Что нужно сделать</span>
                  <textarea name="task" rows="5" placeholder="Например: котёл плохо греет, падает давление, нужна чистка кондиционера" required />
                </label>
              </div>

              <button className="primary requestSubmit" type="submit">
                <Phone size={18} />
                Отправить заявку
              </button>

              <p className="formWarning">
                Форма демонстрационная. Для подключения отправки заявок потребуется
                Telegram, email или CRM.
              </p>
            </form>

            <aside className="contactCard">
              <h3>{companyContacts.name}</h3>

              <div className="contactLine">
                <Building2 />
                <div>
                  <span>Компания</span>
                  <p>ООО «ТеплоСфера»</p>
                </div>
              </div>

              <div className="contactLine">
                <MapPin />
                <div>
                  <span>Адрес</span>
                  <p>{companyContacts.address}</p>
                </div>
              </div>

              <div className="contactLine">
                <Clock />
                <div>
                  <span>Зона выезда</span>
                  <p>Омск и Омская область</p>
                </div>
              </div>

              <div className="contactLine">
                <Phone />
                <div>
                  <span>Телефон</span>
                  <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>
                </div>
              </div>

              <div className="contactsButtons">
                <a className="secondary" href={companyContacts.emailHref}>
                  <Mail size={18} />
                  Написать на почту
                </a>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <footer>
        <b>
          <span className="warm">Тепло</span>
          <span className="cold">Сфера</span>
        </b>

        <span>© 2026. Инженерный сервис для дома.</span>
      </footer>
    </div>
  );
}

export default App;