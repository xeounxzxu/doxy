import { useState } from 'react';
import BottomNav, { BottomNavItem } from './components/BottomNav';
import HomeScreen from './screens/HomeScreen';
import MyInfoScreen from './screens/MyInfoScreen';
import PlaceholderScreen from './screens/PlaceholderScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import SearchScreen from './screens/SearchScreen';
import CartScreen from './screens/CartScreen';

type Tab = 'home' | 'picks' | 'cart' | 'orders' | 'profile';

const bottomTabs: Array<BottomNavItem<Tab>> = [
  { id: 'home', label: '홈', emoji: '🏠' },
  { id: 'picks', label: '배달픽', emoji: '⭐' },
  { id: 'cart', label: '장바구니', emoji: '🛒' },
  { id: 'orders', label: '주문톡', emoji: '💬' },
  { id: 'profile', label: '내정보', emoji: '👤' }
];

type OverlayScreen = 'login' | 'signup' | 'password' | 'search' | null;

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [placeholderLabel, setPlaceholderLabel] = useState<string | null>(null);
  const [overlayScreen, setOverlayScreen] = useState<OverlayScreen>(null);

  const renderScreen = () => {
    if (overlayScreen === 'login') {
      return (
        <LoginScreen
          onBack={() => setOverlayScreen(null)}
          onSignup={() => setOverlayScreen('signup')}
          onForgotPassword={() => setOverlayScreen('password')}
        />
      );
    }

    if (overlayScreen === 'signup') {
      return <SignupScreen onBack={() => setOverlayScreen('login')} />;
    }

    if (overlayScreen === 'password') {
      return <ForgotPasswordScreen onBack={() => setOverlayScreen('login')} />;
    }

    if (overlayScreen === 'search') {
      return <SearchScreen onBack={() => setOverlayScreen(null)} />;
    }

    if (placeholderLabel) {
      return <PlaceholderScreen label={placeholderLabel} onBack={() => setPlaceholderLabel(null)} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomeScreen onSearchRequest={() => setOverlayScreen('search')} />;
      case 'cart':
        return <CartScreen onBrowseMenu={() => setActiveTab('home')} />;
      case 'profile':
        return (
          <MyInfoScreen
            onNavigatePlaceholder={(label) => setPlaceholderLabel(label)}
            onLoginRequest={() => setOverlayScreen('login')}
          />
        );
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
          setOverlayScreen(null);
          setPlaceholderLabel(null);
          setActiveTab(tab);
        }}
      />
    </div>
  );
}

export default App;
