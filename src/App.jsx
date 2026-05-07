import React, { useMemo, useState } from "react";
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

const priceItems = [
  ["Диагностика газового котла", "от 1 500 ₽", "котлы"],
  ["ТО настенного газового котла", "от 3 500 ₽", "котлы"],
  ["ТО напольного газового котла", "от 4 500 ₽", "котлы"],
  ["Ремонт газового котла", "от 2 500 ₽", "котлы"],
  ["Промывка теплообменника котла", "от 4 000 ₽", "котлы"],
  ["Замена насоса котла", "от 3 000 ₽", "котлы"],
  ["Замена расширительного бака", "от 3 500 ₽", "котлы"],
  ["Замена датчика температуры", "от 2 000 ₽", "котлы"],
  ["Настройка автоматики котла", "от 2 000 ₽", "котлы"],
  ["Пусконаладка котла", "от 4 000 ₽", "котлы"],

  ["Осмотр газового оборудования", "от 1 500 ₽", "газ"],
  ["Проверка автоматики безопасности", "от 1 800 ₽", "газ"],
  ["Установка датчика газа", "от 2 500 ₽", "газ"],
  ["Проверка вентиляции и дымохода", "от 1 500 ₽", "газ"],
  ["Ремонт газовой колонки", "от 2 500 ₽", "газ"],
  ["ТО газовой колонки", "от 3 000 ₽", "газ"],
  ["Замена гибкой подводки", "от 1 500 ₽", "газ"],
  ["Проверка герметичности соединений", "от 1 200 ₽", "газ"],
  ["Подготовка уведомления специализированной организации", "от 1 000 ₽", "газ"],

  ["Промывка системы отопления", "от 6 000 ₽", "отопление"],
  ["Импульсная промывка отопления водой", "от 8 000 ₽", "отопление"],
  ["Опрессовка системы отопления", "от 4 000 ₽", "отопление"],
  ["Проверка давления в системе", "от 1 500 ₽", "отопление"],
  ["Балансировка радиаторов", "от 2 500 ₽", "отопление"],
  ["Замена радиатора отопления", "от 4 000 ₽", "отопление"],
  ["Монтаж радиатора", "от 4 500 ₽", "отопление"],
  ["Замена крана / термоголовки", "от 1 500 ₽", "отопление"],
  ["Установка циркуляционного насоса", "от 4 500 ₽", "отопление"],
  ["Проверка насосной группы", "от 1 800 ₽", "отопление"],
  ["Поиск завоздушивания системы", "от 2 000 ₽", "отопление"],
  ["Удаление воздуха из системы", "от 1 500 ₽", "отопление"],
  ["Настройка давления расширительного бака", "от 2 000 ₽", "отопление"],
  ["Ремонт теплого пола", "от 3 500 ₽", "отопление"],
  ["Диагностика теплого пола", "от 2 500 ₽", "отопление"],

  ["Чистка кондиционера", "от 2 500 ₽", "климат"],
  ["Антибактериальная обработка кондиционера", "от 1 500 ₽", "климат"],
  ["Проверка дренажа кондиционера", "от 1 500 ₽", "климат"],
  ["Дозаправка кондиционера", "от 2 500 ₽", "климат"],
  ["Ремонт сплит-системы", "от 3 000 ₽", "климат"],
  ["Монтаж кондиционера", "от 9 000 ₽", "климат"],
  ["Демонтаж кондиционера", "от 3 500 ₽", "климат"],
  ["Поиск утечки фреона", "от 2 500 ₽", "климат"],
  ["Вакуумирование трассы", "от 2 000 ₽", "климат"],

  ["Монтаж водоснабжения", "от 5 000 ₽", "инженерия"],
  ["Ремонт водоснабжения", "от 2 500 ₽", "инженерия"],
  ["Монтаж канализации", "от 4 500 ₽", "инженерия"],
  ["Прочистка канализации", "от 2 500 ₽", "инженерия"],
  ["Установка фильтра воды", "от 2 500 ₽", "инженерия"],
  ["Установка бойлера", "от 5 000 ₽", "инженерия"],
  ["Замена запорной арматуры", "от 1 800 ₽", "инженерия"],
  ["Монтаж группы безопасности", "от 3 000 ₽", "инженерия"],
  ["Монтаж системы отопления под ключ", "от 45 000 ₽", "инженерия"],
  ["Проектная консультация по инженерным системам", "от 3 000 ₽", "инженерия"],

  ["Выезд мастера по Омску", "от 800 ₽", "выезд"],
  ["Выезд по Омской области", "по расчёту", "выезд"],
  ["Срочный выезд", "+30–50%", "выезд"],
  ["Комплексная диагностика дома", "от 5 000 ₽", "пакеты"],
  ["Сервисное сопровождение объекта", "по договору", "пакеты"],
];

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
  const [filter, setFilter] = useState("все");

  const categories = [
    "все",
    "котлы",
    "газ",
    "отопление",
    "климат",
    "инженерия",
    "выезд",
    "пакеты",
  ];

  const filtered = useMemo(() => {
    if (filter === "все") return priceItems;
    return priceItems.filter((item) => item[2] === filter);
  }, [filter]);

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

            <h1>Тепло, газ и климат дома — под контролем специалистов</h1>

            <p>
              ООО «ТеплоСфера» — инженерный сервис для домов, квартир и объектов:
              ВДГО/ВКГО, котлы, отопление, кондиционеры, водоснабжение и ремонт.
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
              <div>
                <b>15</b>
                <span>обученных специалистов</span>
              </div>

              <div>
                <b>Омск</b>
                <span>и Омская область</span>
              </div>

              <div>
                <b>58</b>
                <span>позиций в полном прайсе</span>
              </div>
            </div>
          </div>

          <div className="heroCard">
            <h3>Быстрый вызов мастера</h3>

            <p>
              Подберём специалиста под вашу проблему и заранее сориентируем по стоимости.
            </p>

            <ul>
              <li><CheckCircle2 /> Котёл не запускается</li>
              <li><CheckCircle2 /> Падает давление отопления</li>
              <li><CheckCircle2 /> Нужна промывка системы</li>
              <li><CheckCircle2 /> Кондиционер плохо холодит</li>
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

        <section className="section" id="price">
          <div className="sectionTitle">
            <span>Прайс</span>
            <h2>Основные позиции</h2>
            <p>
              Цены ориентировочные. Итог зависит от оборудования, сложности,
              срочности и удалённости объекта.
            </p>
          </div>

          <div className="filters">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={filter === category ? "active" : ""}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="priceTable">
            <div className="priceHead">
              <b>Работа</b>
              <b>Цена</b>
              <b>Категория</b>
            </div>

            {filtered.map(([name, price, category], index) => (
              <div className="priceRow" key={name + index}>
                <span>{name}</span>
                <b>{price}</b>
                <em>{category}</em>
              </div>
            ))}
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
          <div className="contactsText">
            <span className="eyebrow">Контакты</span>
            <h2>Вызвать мастера ТеплоСферы</h2>

            <p>
              Работаем по Омску и Омской области. Можно вызвать мастера для диагностики,
              ремонта, обслуживания котла, промывки отопления, проверки газового оборудования
              или чистки кондиционера.
            </p>

            <div className="contactsButtons">
              <a className="primary" href={companyContacts.phoneHref}>
                <Phone size={18} />
                Позвонить мастеру
              </a>

              <a className="secondary" href={companyContacts.emailHref}>
                <Mail size={18} />
                Написать на почту
              </a>
            </div>
          </div>

          <div className="contactCard">
            <h3>{companyContacts.name}</h3>

            <div className="contactLine">
              <Phone />
              <div>
                <span>Телефон</span>
                <a href={companyContacts.phoneHref}>{companyContacts.phone}</a>
              </div>
            </div>

            <div className="contactLine">
              <Mail />
              <div>
                <span>Email</span>
                <a href={companyContacts.emailHref}>{companyContacts.email}</a>
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
                <span>Режим работы</span>
                <p>Ежедневно 08:00–21:00</p>
              </div>
            </div>

            <div className="requisitesMini">
              <p><b>ОГРН:</b> {companyContacts.ogrn}</p>
              <p><b>ИНН:</b> {companyContacts.inn}</p>
              <p><b>КПП:</b> {companyContacts.kpp}</p>
            </div>
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