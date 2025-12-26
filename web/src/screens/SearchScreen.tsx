import { recentSearches, realtimeSearches, weeklySearches } from '../data/search';

interface SearchScreenProps {
  onBack: () => void;
}

function SearchScreen({ onBack }: SearchScreenProps) {
  return (
    <div className="screen search-screen">
      <header className="search-header">
        <button className="icon-button" type="button" aria-label="뒤로 가기" onClick={onBack}>
          〈
        </button>
        <div className="search-header-input">
          <span role="img" aria-hidden="true">
            🔍
          </span>
          <input type="text" placeholder="검색어 입력" aria-label="검색" autoFocus />
        </div>
      </header>

      <section className="search-region">
        <p>빈증지역</p>
        <button className="text-link" type="button">
          변경하기
        </button>
      </section>

      <section className="search-section">
        <div className="section-heading">
          <h2>최근검색어</h2>
          <button type="button">전체삭제</button>
        </div>
        <div className="search-chips">
          {recentSearches.map((word) => (
            <button key={word} type="button" className="search-chip">
              {word}
              <span aria-hidden="true">✕</span>
            </button>
          ))}
        </div>
      </section>

      <section className="search-section">
        <div className="section-heading">
          <h2>실시간 급상승 검색어</h2>
        </div>
        <div className="search-chips rank">
          {realtimeSearches.map((word) => (
            <button key={word} type="button" className="search-chip rank-chip">
              <span role="img" aria-hidden="true">
                📈
              </span>
              {word}
            </button>
          ))}
        </div>
      </section>

      <section className="search-section">
        <div className="section-heading">
          <h2>주간 검색순위</h2>
          <small>12월 3번째 주</small>
        </div>
        <div className="search-chips weekly">
          {weeklySearches.map((word) => (
            <button key={word} type="button" className="search-chip weekly-chip">
              {word}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SearchScreen;
