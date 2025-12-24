import { useState } from 'react';
import BottomNav, { BottomNavItem } from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';

type Tab = 'home' | 'picks' | 'cart' | 'orders' | 'profile';

const bottomTabs: Array<BottomNavItem<Tab>> = [
  { id: 'home', label: '홈', emoji: '🏠' },
  { id: 'picks', label: '배달픽', emoji: '⭐' },
  { id: 'cart', label: '장바구니', emoji: '🛒' },
  { id: 'orders', label: '주문톡', emoji: '💬' },
  { id: 'profile', label: '내정보', emoji: '👤' }
];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [placeholderLabel, setPlaceholderLabel] = useState<string | null>(null);

  const renderScreen = () => {
    if (placeholderLabel) {
      return <PlaceholderScreen label={placeholderLabel} onBack={() => setPlaceholderLabel(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'profile':
        return <MyInfoScreen onNavigatePlaceholder={(label) => setPlaceholderLabel(label)} />;
      default:
        return <PlaceholderScreen label={bottomTabs.find((tab) => tab.id === activeTab)?.label ?? ''} />;
    }
  };

  return (
    <div className="app-shell">
      <main className="app-content">{renderScreen()}</main>
      <BottomNav
        items={bottomTabs}
        active={activeTab}
        onSelect={(tab) => {
          setPlaceholderLabel(null);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}

export default App;
