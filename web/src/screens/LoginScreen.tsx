import type { FormEvent } from 'react';

interface LoginScreenProps {
  onBack: () => void;
  onSignup: () => void;
  onForgotPassword: () => void;
}

function LoginScreen({ onBack, onSignup, onForgotPassword }: LoginScreenProps) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div className="screen login-screen">
      <header className="login-header">
        <button className="icon-button" aria-label="뒤로 가기" onClick={onBack}>
          〈
        </button>
        <h1>로그인</h1>
      </header>

      <section className="login-actions">
        <button className="login-pill" type="button">
          <span role="img" aria-hidden="true">
            ☎️
          </span>
          전화번호 로그인
        </button>
        <button className="login-pill kakao" type="button">
          <span role="img" aria-hidden="true">
            🗨️
          </span>
          카카오톡으로 로그인
        </button>
      </section>

      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <span>이메일</span>
          <input type="email" placeholder="example@deliveryk.com" required />
        </label>
        <label>
          <span>비밀번호</span>
          <div className="password-field">
            <input type="password" placeholder="비밀번호" required />
            <span role="img" aria-label="see password">
              👁️
            </span>
          </div>
        </label>
        <button className="login-submit" type="submit">
          로그인
        </button>
      </form>

      <div className="login-links">
        <button type="button" onClick={onSignup}>
          회원가입
        </button>
        <button type="button" onClick={onForgotPassword}>
          비밀번호찾기
        </button>
      </div>
    </div>
  );
}

export default LoginScreen;
