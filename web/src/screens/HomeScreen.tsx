import { categories, heroSlides, promotions, quickServices } from '../data/home';

function HomeScreen() {
  return (
    <div className="screen home-screen">
      <header className="home-header">
        <button className="icon-button" aria-label="이전">
          <span>〈</span>
        </button>
        <div className="header-location" role="button" aria-label="지역 선택">
          <strong>다낭</strong>
          <span>현재 위치</span>
        </div>
        <button className="icon-button" aria-label="장바구니">
          🛍️
        </button>
      </header>

      <section className="hero-slider" aria-label="주요 배너">
        {heroSlides.map((slide) => (
          <article className="hero-tile" key={slide.id} style={{ background: slide.accent }}>
            <div>
              <p className="hero-brand">{slide.brand}</p>
              {slide.title.split('\n').map((line) => (
                <h2 key={line}>{line}</h2>
              ))}
              <p className="hero-desc">{slide.description}</p>
            </div>
            <span className="hero-emoji" role="img" aria-label={slide.brand}>
              {slide.emoji}
            </span>
          </article>
        ))}
      </section>

      <div className="search-bar" role="search">
        <span className="search-icon">🔍</span>
        <input placeholder="맛집, 배달 메뉴, 상품 검색" aria-label="검색" />
        <span className="hash-tag">#김밥</span>
      </div>

      <section className="category-section" aria-label="카테고리">
        <div className="category-grid">
          {categories.map((category) => (
            <button className="category-item" key={category.id} type="button">
              <span className="category-icon" role="img" aria-hidden="true">
                {category.emoji}
              </span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="quick-section" aria-label="자주 찾는 서비스">
        <div className="quick-scroll">
          {quickServices.map((service) => (
            <button className="quick-pill" key={service.id} type="button">
              <span role="img" aria-hidden="true">
                {service.emoji}
              </span>
              {service.label}
            </button>
          ))}
        </div>
      </section>

      <section className="promo-section" aria-label="오늘의 프로모션">
        <div className="promo-heading">
          <h3>오늘의 프로모션</h3>
          <button type="button">전체보기</button>
        </div>
        <div className="promo-scroll">
          {promotions.map((promo) => (
            <article className="promo-card" key={promo.id}>
              <span className="promo-badge">{promo.badge}</span>
              <h4>{promo.title}</h4>
              <p>{promo.desc}</p>
              <strong>{promo.price}</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeScreen;
