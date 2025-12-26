import { FormEvent, useState } from 'react';

interface SignupScreenProps {
  onBack: () => void;
}

function SignupScreen({ onBack }: SignupScreenProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="screen signup-screen">
      <header className="signup-header">
        <button className="icon-button" aria-label="뒤로 가기" onClick={onBack} type="button">
          〈
        </button>
        <h1>회원가입</h1>
      </header>

      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          <span>이메일 (아이디)</span>
          <input type="email" placeholder="example@deliveryk.com" required />
        </label>
        <label>
          <span>이름</span>
          <input type="text" placeholder="홍길동" required />
        </label>
        <label>
          <span>비밀번호</span>
          <div className="password-field">
            <input type={showPassword ? 'text' : 'password'} placeholder="비밀번호" required />
            <button
              type="button"
              className="password-toggle"
              aria-label="비밀번호 표시"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              👁️
            </button>
          </div>
        </label>
        <label>
          <span>비밀번호 확인</span>
          <div className="password-field">
            <input type={showPasswordConfirm ? 'text' : 'password'} placeholder="비밀번호 확인" required />
            <button
              type="button"
              className="password-toggle"
              aria-label="비밀번호 확인 표시"
              onClick={() => setShowPasswordConfirm((prev) => !prev)}
            >
              👁️
            </button>
          </div>
        </label>

        <label className="signup-terms">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(event) => setAgreeTerms(event.target.checked)}
            aria-label="서비스 이용약관 동의"
            required
          />
          <span>
            <strong>서비스 이용약관 동의</strong>
            <small>서비스 이용약관에 동의해주세요</small>
          </span>
        </label>

        <button className="signup-submit" type="submit" disabled={!agreeTerms}>
          회원가입 완료
        </button>
      </form>
    </div>
  );
}

export default SignupScreen;
