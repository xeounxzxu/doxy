import type { FormEvent } from 'react';

interface ForgotPasswordScreenProps {
  onBack: () => void;
}

function ForgotPasswordScreen({ onBack }: ForgotPasswordScreenProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="screen forgot-screen">
      <header className="forgot-header">
        <button className="icon-button" aria-label="뒤로 가기" onClick={onBack} type="button">
          〈
        </button>
        <h1>비밀번호찾기</h1>
      </header>

      <section className="forgot-panel">
        <form className="forgot-form" onSubmit={handleSubmit}>
          <label>
            <span>이메일</span>
            <input type="email" placeholder="example@deliveryk.com" required />
          </label>
          <div className="forgot-helper">
            <strong>비밀번호찾기 방법</strong>
            <p>
              입력하신 이메일로 전송된 메일을 확인해서 비밀번호 찾기 버튼을 누르고 이동된 사이트에서 새로운
              비밀번호를 입력하시면 됩니다
            </p>
          </div>
          <button type="submit" className="forgot-submit">
            이메일발송
          </button>
        </form>
      </section>
    </div>
  );
}

export default ForgotPasswordScreen;
