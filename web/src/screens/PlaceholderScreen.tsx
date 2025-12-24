interface PlaceholderScreenProps {
  label: string;
  onBack?: () => void;
}

function PlaceholderScreen({ label, onBack }: PlaceholderScreenProps) {
  return (
    <div className="screen placeholder-screen">
      <p>
        <strong>{label}</strong> 영역은 곧 공개됩니다.
      </p>
      <span role="img" aria-hidden="true">
        🚧
      </span>
      {onBack && (
        <button className="ghost-button" type="button" onClick={onBack}>
          돌아가기
        </button>
      )}
    </div>
  );
}

export default PlaceholderScreen;
