interface CartScreenProps {
  onBrowseMenu?: () => void;
}

function CartScreen({ onBrowseMenu }: CartScreenProps) {
  return (
    <div className="screen cart-screen">
      <header className="cart-header">
        <h1>장바구니</h1>
      </header>
      <section className="cart-empty">
        <div className="cart-illustration" aria-hidden="true">
          🧺
        </div>
        <p>장바구니가 비었어요</p>
        <button type="button" onClick={onBrowseMenu}>
          메뉴담으러가기
        </button>
      </section>
    </div>
  );
}

export default CartScreen;
