export type BottomNavItem<T> = {
  id: T;
  label: string;
  emoji: string;
};

interface BottomNavProps<T> {
  items: Array<BottomNavItem<T>>;
  active: T;
  onSelect: (tab: T) => void;
}

function BottomNav<T extends string>({ items, active, onSelect }: BottomNavProps<T>) {
  return (
    <footer className="bottom-nav" aria-label="하단 메뉴">
      {items.map((item) => (
        <button
          key={item.id}
          className={item.id === active ? 'nav-item active' : 'nav-item'}
          type="button"
          aria-pressed={item.id === active}
          onClick={() => onSelect(item.id)}
        >
          <span role="img" aria-hidden="true">
            {item.emoji}
          </span>
          {item.label}
        </button>
      ))}
    </footer>
  );
}

export default BottomNav;
