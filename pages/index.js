import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Реклама ВКонтакте</title>
        <link rel="stylesheet" href="/css/main.css"></link>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
        <script src="/js/swiper.js"></script>
        <script src="/js/slider.js"></script>
      </Head>
      <main>
      <header class="header menu-opened">
        <div class="header__nav-wrapper">
          <a href="https://vk.com/biz" class="header__logo" aria-label="Логотип VK Business" target="_top">
            <svg width="119" height="48" viewBox="0 0 119 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M39.42 17.1279C39.42 19.2872 37.8313 20.8299 35.5482 20.8299C34.2681 20.8299 33.2809 20.3824 32.602 19.5496C31.985 18.7628 31.6921 17.7911 31.6921 16.0944C31.6921 12.9632 32.7099 10.9733 36.0108 10.6649C37.245 10.5568 37.569 10.3101 37.708 9.58514L38.8338 9.69318C38.7101 11.3897 37.5069 11.7137 36.0418 11.8372C33.8668 12.0377 33.1113 13.1173 32.9723 14.8141C33.6044 13.9812 34.561 13.4721 35.8412 13.4721C37.9388 13.4721 39.42 14.9837 39.42 17.1279ZM38.1395 17.1432C38.1395 15.6316 37.0907 14.5981 35.5788 14.5981C34.0364 14.5981 32.988 15.6316 32.988 17.1432C32.988 18.6548 34.0364 19.7039 35.5788 19.7039C37.0907 19.7039 38.1395 18.6548 38.1395 17.1432Z" fill="black"/>
              <path d="M40.9935 20.6756V12.7625H42.1967V19.3644H42.4127L45.8985 12.7625H47.8116V20.6756H46.6085V14.0737H46.4078L42.9063 20.6756H40.9935Z" fill="black"/>
              <path d="M55.4145 18.4852C55.4145 19.7808 54.2577 20.8299 52.4529 20.8299C50.8795 20.8299 49.553 20.0276 49.1827 18.7012L50.3242 18.5161C50.6788 19.3644 51.4657 19.7347 52.4372 19.7347C53.5634 19.7347 54.165 19.2256 54.165 18.4236C54.165 17.7448 53.6867 17.2049 52.4372 17.2049H51.342V16.0944H52.4372C53.5018 16.0944 54.0417 15.6316 54.0417 14.9529C54.0417 14.1816 53.3164 13.7036 52.4372 13.7036C51.6043 13.7036 50.8947 14.12 50.5555 14.8449L49.3987 14.6444C49.877 13.3333 51.0954 12.6084 52.4836 12.6084C54.0723 12.6084 55.2908 13.5493 55.2908 14.8604C55.2908 15.7088 54.7972 16.372 54.057 16.6188C54.7819 16.8656 55.4145 17.498 55.4145 18.4852Z" fill="black"/>
              <path d="M62.515 12.7625H63.7488V20.6756H62.515V17.2359H58.412V20.6756H57.1782V12.7625H58.412V16.1099H62.515V12.7625Z" fill="black"/>
              <path d="M73.3777 17.0816H66.6833C66.8219 18.6548 67.9328 19.6884 69.5216 19.6884C70.6627 19.6884 71.5576 19.1639 71.9585 18.4544L73.1154 18.6395C72.4521 20.0895 71.0177 20.8299 69.4595 20.8299C67.0689 20.8299 65.3875 19.1176 65.3875 16.7113C65.3875 14.3204 67.0536 12.6084 69.3826 12.6084C71.7273 12.6084 73.393 14.3204 73.393 16.696C73.393 16.8348 73.393 16.8964 73.3777 17.0816ZM66.7296 16.0172H72.0512C71.8042 14.6444 70.7864 13.7189 69.3826 13.7189C68.0098 13.7189 66.992 14.6292 66.7296 16.0172Z" fill="black"/>
              <path d="M74.5035 16.7113C74.5035 14.3204 76.1849 12.6084 78.576 12.6084C80.1643 12.6084 81.5992 13.3796 82.2314 14.8449L81.0593 15.0455C80.6736 14.2896 79.7787 13.7344 78.6529 13.7344C76.9561 13.7344 75.7993 14.9376 75.7993 16.7113C75.7993 18.5007 76.9561 19.6884 78.6529 19.6884C79.8408 19.6884 80.7816 19.0868 81.1362 18.2847L82.293 18.4852C81.6761 20.0276 80.1953 20.8299 78.576 20.8299C76.1849 20.8299 74.5035 19.1176 74.5035 16.7113Z" fill="black"/>
              <path d="M38.9418 32.9822C38.9418 34.2624 37.7386 35.2032 36.0108 35.2032H32.0008V27.1824H35.8412C37.5069 27.1824 38.6641 28.0769 38.6641 29.3417C38.6641 30.175 38.2169 30.7145 37.5226 31.0385C38.3096 31.2855 38.9418 32.0104 38.9418 32.9822ZM33.7741 28.6479V30.3906H35.8412C36.4585 30.3906 36.8904 30.036 36.8904 29.5271C36.8904 29.0178 36.4585 28.6479 35.8412 28.6479H33.7741ZM36.0108 33.7382C36.705 33.7382 37.1676 33.3521 37.1676 32.7663C37.1676 32.18 36.705 31.7791 36.0108 31.7791H33.7741V33.7382H36.0108Z" fill="black"/>
              <path d="M45.5129 35.2032L42.7367 32.0104H42.3047V35.2032H40.531V27.1824H42.3047V30.2983H42.7367L45.4206 27.1824H47.5336L44.1558 31.0385L47.8423 35.2032H45.5129Z" fill="black"/>
              <path d="M47.8365 31.1928C47.8365 28.7559 49.6103 27.0281 52.1246 27.0281C54.6389 27.0281 56.4126 28.7559 56.4126 31.1928C56.4126 33.6302 54.6389 35.3575 52.1246 35.3575C49.6103 35.3575 47.8365 33.6302 47.8365 31.1928ZM54.5616 31.1928C54.5616 29.6814 53.5743 28.6479 52.1246 28.6479C50.6744 28.6479 49.6872 29.6814 49.6872 31.1928C49.6872 32.7047 50.6744 33.7382 52.1246 33.7382C53.5743 33.7382 54.5616 32.7047 54.5616 31.1928Z" fill="black"/>
              <path d="M63.2863 27.1824H65.0604V35.2032H63.2863V31.9641H59.6925V35.2032H57.9183V27.1824H59.6925V30.3447H63.2863V27.1824Z" fill="black"/>
              <path d="M68.9445 35.2032V28.8022H66.1678V27.1824H73.4948V28.8022H70.7182V35.2032H68.9445Z" fill="black"/>
              <path d="M81.1979 30.6992V35.2032H79.8867L79.5168 33.9384C79.1312 34.6016 78.252 35.3575 76.9409 35.3575C75.3058 35.3575 74.1489 34.2934 74.1489 32.7969C74.1489 31.3161 75.321 30.283 77.6811 30.283H79.4088C79.3315 29.2337 78.7609 28.5399 77.789 28.5399C76.9872 28.5399 76.4315 29.0024 76.185 29.496L74.5498 29.2184C74.9507 27.8303 76.3235 27.0281 77.8817 27.0281C79.933 27.0281 81.1979 28.3702 81.1979 30.6992ZM79.4242 31.6711H77.7427C76.3856 31.6711 75.9379 32.1031 75.9379 32.72C75.9379 33.4142 76.4936 33.8615 77.3571 33.8615C78.5913 33.8615 79.4242 32.9822 79.4242 31.6711Z" fill="black"/>
              <path d="M88.0946 35.2032L85.3184 32.0104H84.8864V35.2032H83.1123V27.1824H84.8864V30.2983H85.3184L88.0019 27.1824H90.1154L86.7371 31.0385L90.424 35.2032H88.0946Z" fill="black"/>
              <path d="M93.6668 35.2032V28.8022H90.8901V27.1824H98.2171V28.8022H95.4405V35.2032H93.6668Z" fill="black"/>
              <path d="M107.138 31.6711H100.69C100.86 32.9049 101.754 33.7382 103.112 33.7382C104.053 33.7382 104.793 33.3369 105.179 32.7663L106.845 33.0439C106.243 34.571 104.67 35.3575 103.004 35.3575C100.567 35.3575 98.8392 33.6144 98.8392 31.1928C98.8392 28.7712 100.567 27.0281 103.004 27.0281C105.441 27.0281 107.169 28.7865 107.169 31.1002C107.169 31.3161 107.153 31.5015 107.138 31.6711ZM100.798 30.283H105.241C104.947 29.2801 104.114 28.5705 103.004 28.5705C101.924 28.5705 101.091 29.2495 100.798 30.283Z" fill="black"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M8.31998 12.0001H15.68C22.3998 12.0001 24 13.6 24 20.3201V27.6802C24 34.4 22.3998 36 15.68 36H8.31998C1.60001 36 0 34.4 0 27.6802V20.3201C-1e-07 13.6 1.60001 12.0001 8.31998 12.0001Z" fill="#2787F5"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.656 20.2683C19.7673 19.8976 19.656 19.625 19.1269 19.625H17.3768C16.9318 19.625 16.7267 19.8604 16.6155 20.1199C16.6155 20.1199 15.7255 22.2891 14.4648 23.6981C14.057 24.1061 13.8716 24.236 13.649 24.236C13.5379 24.236 13.3768 24.1061 13.3768 23.7354V20.2683C13.3768 19.8234 13.2476 19.625 12.8768 19.625H10.1268C9.84879 19.625 9.68149 19.8316 9.68149 20.0273C9.68149 20.4492 10.3119 20.5465 10.377 21.733V24.3099C10.377 24.875 10.2748 24.9776 10.0523 24.9776C9.45917 24.9776 8.01593 22.7986 7.16013 20.3054C6.99231 19.8207 6.82419 19.625 6.37695 19.625H4.62692C4.12689 19.625 4.02698 19.8604 4.02698 20.1199C4.02698 20.5834 4.62015 22.8824 6.78931 25.923C8.23538 27.9994 10.2728 29.1251 12.1268 29.1251C13.2392 29.1251 13.3768 28.875 13.3768 28.4444V26.8752C13.3768 26.375 13.4821 26.2754 13.8345 26.2754C14.094 26.2754 14.539 26.405 15.5773 27.4062C16.7638 28.5927 16.9594 29.1251 17.6269 29.1251H19.377C19.8768 29.1251 20.1268 28.875 19.9827 28.3817C19.8247 27.89 19.2583 27.1766 18.5066 26.3309C18.0987 25.8489 17.4867 25.3298 17.3015 25.0701C17.0419 24.7365 17.116 24.5881 17.3015 24.2915C17.3015 24.2915 19.4337 21.288 19.656 20.2683Z" fill="white"/>
              </svg>
          </a>
          <nav class="header__main-nav">
            <ul class="main-nav">
              <li class="main-nav__item"><a href="#" class="main-nav__link">С чего начать</a></li>
              <li class="main-nav__item main-nav__item--active"><a href="#" class="main-nav__link">Инструменты</a></li>
              <li class="main-nav__item"><a href="#" class="main-nav__link">Помощь и обучение</a></li>
          </ul>
          </nav>
          <div class="header__user-auth">Александр</div>
      </div>
      <div class="header__links-wrapper">
        <ul class="header__links">
          <li class="header__link header__link--active"><a href="https://vk.com/business-ads" target="_top">Реклама</a></li>
          <li class="header__link"><a href="https://vk.com/business-pages" target="_top">Страница бизнеса</a></li>
          <li class="header__link"><a href="https://vk.com/biz/shop" target="_top">Магазин ВКонтакте</a></li>
          <li class="header__link"><a href="http://vk.com/biz/new_tools" target="_top">Дополнительные инструменты</a></li>
        </ul>
      </div>
      <div class="nd-vkbiz-header__wrapper header-mobile">
        <div class="nd-vkbiz-header__top">
          <button class="nd-vkbiz-header__toggler js-nd-header-toggler" type="button">
            <div class="nd-vkbiz-header__menu-btn">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 20C23.0523 20 23.5 20.4477 23.5 21C23.5 21.5523 23.0523 22 22.5 22H5.5C4.94772 22 4.5 21.5523 4.5 21C4.5 20.4477 4.94772 20 5.5 20H22.5ZM22.5 13C23.0523 13 23.5 13.4477 23.5 14C23.5 14.5523 23.0523 15 22.5 15H5.5C4.94772 15 4.5 14.5523 4.5 14C4.5 13.4477 4.94772 13 5.5 13H22.5ZM22.5 6C23.0523 6 23.5 6.44772 23.5 7C23.5 7.55228 23.0523 8 22.5 8H5.5C4.94772 8 4.5 7.55228 4.5 7C4.5 6.44772 4.94772 6 5.5 6H22.5Z" fill="#3F8AE0"></path>
              </svg>
            </div>
      
            <div class="nd-vkbiz-header__close-btn">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L14 12.585L20.2929 6.29289C20.6534 5.93241 21.2206 5.90468 21.6129 6.2097L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L15.415 14L21.7071 20.2929C22.0676 20.6534 22.0953 21.2206 21.7903 21.6129L21.7071 21.7071C21.3166 22.0976 20.6834 22.0976 20.2929 21.7071L14 15.415L7.70711 21.7071C7.34662 22.0676 6.77939 22.0953 6.3871 21.7903L6.29289 21.7071C5.90237 21.3166 5.90237 20.6834 6.29289 20.2929L12.585 14L6.29289 7.70711C5.93241 7.34662 5.90468 6.77939 6.2097 6.3871L6.29289 6.29289Z" fill="#3F8AE0"></path>
              </svg>
            </div>
          </button>
        </div>
        <nav class="nd-vkbiz-header__nav nd-vkbiz-nav js-nav">
          <button class="nd-vkbiz-nav__back-link js-back-to-menu hidden" type="button">Меню</button>
          <ul class="nd-vkbiz-nav__list"><li class="nd-vkbiz-nav__list-item"><a href="https://vk.com/ads_easy_promote?from=vk_biz_adpage" target="_blank" class="nd-vkbiz-nav__list-link link_for_ads_easy_promote">Продвижение</a></li><li class="header-mobile__line-wrapper"><div class="header-mobile__line"></div></li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz" class="nd-vkbiz-nav__list-link " target="_top">С чего начать</a>
              </li>
      
              <li class="header-mobile__line-wrapper">
                <div class="header-mobile__line"></div>
              </li>
      
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/business-ads" class="nd-vkbiz-nav__list-link header__link--active" target="_top">Реклама</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/business-pages" class="nd-vkbiz-nav__list-link " target="_top">Страница бизнеса</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/shop" class="nd-vkbiz-nav__list-link " target="_top">Магазин ВКонтакте</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="http://vk.com/biz/new_tools" class="nd-vkbiz-nav__list-link " target="_top">Дополнительные инструменты</a>
              </li>
      
              <li class="header-mobile__line-wrapper"><div class="header-mobile__line"></div></li>
      
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/articles" class="nd-vkbiz-nav__list-link " target="_top">Полезные материалы</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/events" class="nd-vkbiz-nav__list-link " target="_top">Мероприятия и вебинары</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/edu" class="nd-vkbiz-nav__list-link " target="_top">Образовательные курсы</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/cases#search=" class="nd-vkbiz-nav__list-link " target="_top">Кейсы компаний</a>
              </li>
              <li class="nd-vkbiz-nav__list-item">
                <a href="https://vk.com/biz/partners" class="nd-vkbiz-nav__list-link " target="_top">Эксперты и сервисы</a>
              </li>
            </ul>
        </nav>
        
      </div>
      </header>


      <section class="ads__main-screen">
        <div class="main-screen-container main-screen-container--blue">
          <div class="main-screen-container-wrapper">
            <div class="main-screen-content">
              <div class="main-screen-description">
                <h1 class="main-screen-description__title">Реклама ВКонтакте поможет найти клиентов</h1>
                <p class="main-screen-description__subtitle main-screen-description__subtitle--desktop">Запускайте рекламу, увеличивайте продажи<br/>и развивайте бизнес. Вперёд, к новым вершинам!</p>
                <div class="main-screen-description__button main-screen-description__button--desktop">
                  <a id="gtm-ads-main-screen-desktop" class="main-screen-description__link link_for_ads_easy_promote" href="https://vk.com/biz/admin?utm_source=vk_biz_adpage&amp;utm_medium=createad_button" target="_blank">Запустить рекламу</a>
                </div>
              </div>
            </div>
            <div class="main-screen__img--desktop"></div>
          </div>
        </div>
  
        <div class="main-screen-container">
          <div class="main-screen-content main-screen-content__numbers">
            <div class="main-screen-number">
              <div class="main-screen-number__digit">500</div>
              <p class="main-screen-number__description main-screen-number__description--money">рублей достаточно для запуска рекламы</p>
            </div>
  
            <div class="main-screen-number">
              <div class="main-screen-number__digit">97</div>
              <p class="main-screen-number__description main-screen-number__description--users">миллионов активных<br/>пользователей в&nbsp;месяц</p>
            </div>
  
            <div class="main-screen-number">
              <div class="main-screen-number__digit">3</div>
              <p class="main-screen-number__description main-screen-number__description--time desktop">минуты<br/>для запуска рекламы с&nbsp;мобильного</p>
            </div>
          </div>
        </div>
      </section>

      <section class="begin show-mobile-callback-form">
        <div id="begin-id" class="begin__container container">
          <h2>Какая у вас цель?</h2>
  
          <div class="begin__swiper swiper-container">
            <ul class="begin__list swiper-wrapper">
  
              <li class="begin__item begin__item--ad swiper-slide begin__item--active">
                <a id="gtm-37" class="link_for_ads_easy_promote" href="https://vk.com/biz/admin?utm_source=vk_biz_adpage&amp;utm_medium=createad_button" target="_top">
                  <h3><span>Быстро найти<br/>клиентов</span></h3>
                  <p>Умные алгоритмы привлекут клиентов на сайт или в&nbsp;сообщество, сэкономив бюджет</p>
                  <span class="button begin__button button-reset">Найти клиентов</span>
                </a>
              </li>
  
              <li class="begin__item begin__item--shop swiper-slide">
                <a id="gtm-36" href="https://vk.com/business-pages" target="_top">
                  <h3><span>Начать бизнес ВКонтакте</span></h3>
                  <p>Создайте Страницу бизнеса ВКонтакте с&nbsp;магазином и бесплатным сайтом<br/>на её основе</p>
                  <span class="button button-reset">Начать</span>
                </a>
              </li>
  
              <li class="begin__item begin__item--create swiper-slide">
                <a id="gtm-35" href="https://vk.com/business-ads" target="_top">
                  <h3><span>Развивать дело<br/>онлайн</span></h3>
                  <p>Оцените дополнительные инструменты, которые помогут искать клиентов и&nbsp;автоматизировать бизнес</p>
                  <span class="button button-reset">Развивать</span>
                </a>
              </li>
  
            </ul>
            <div class="begin__pagination swiper-pagination"></div>
          </div>
  
        </div>
      </section>
      
      
      <script>
        
      </script>

    </main>
    </div>
  )
}
