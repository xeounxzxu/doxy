import { myInfoPrimary, myInfoSecondary } from '../data/myInfo';

interface MyInfoScreenProps {
  onNavigatePlaceholder: (label: string) => void;
}

function MyInfoScreen({ onNavigatePlaceholder }: MyInfoScreenProps) {
  const handleClick = (label: string) => () => onNavigatePlaceholder(label);

  return (
    <div className="screen myinfo-screen">
      <header className="myinfo-header">
        <button className="icon-button" aria-label="설정" onClick={handleClick('설정')}>
          ⚙️
        </button>
        <div>
          <p className="myinfo-login-text">로그인/회원가입</p>
          <button className="link-button" type="button" onClick={handleClick('로그인/회원가입')}>
            로그인 해주세요
          </button>
        </div>
        <button className="icon-button" aria-label="알림" onClick={handleClick('알림')}>
          🔔
        </button>
      </header>

      <section className="myinfo-summary" aria-label="포인트 정보">
        <button type="button" onClick={handleClick('포인트')} className="myinfo-summary-card">
          <p>포인트</p>
          <strong>-</strong>
        </button>
        <button type="button" onClick={handleClick('바우처/쿠폰')} className="myinfo-summary-card">
          <p>바우처/쿠폰</p>
          <strong>-</strong>
        </button>
        <button type="button" onClick={handleClick('리뷰')} className="myinfo-summary-card">
          <p>리뷰</p>
          <strong>-</strong>
        </button>
      </section>

      <section className="myinfo-list" aria-label="내정보 메뉴">
        {myInfoPrimary.map((item) => (
          <button key={item.id} className="myinfo-item" type="button" onClick={handleClick(item.label)}>
            <span role="img" aria-hidden="true">
              {item.emoji}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </section>

      <section className="myinfo-list" aria-label="비즈니스 메뉴">
        {myInfoSecondary.map((item) => (
          <button key={item.id} className="myinfo-item" type="button" onClick={handleClick(item.label)}>
            <span role="img" aria-hidden="true">
              {item.emoji}
            </span>
            <span>{item.label}</span>
          </button>
        ))}
      </section>

      <p className="myinfo-footnote">Copyright DeliveryK. All Right Reserved.</p>
    </div>
  );
}

export default MyInfoScreen;
