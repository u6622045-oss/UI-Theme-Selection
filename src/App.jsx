import React from 'react';
import { SettingsProvider, useSettings } from './SettingsContext';
import { Header } from './Header';
import { SettingsPanel } from './SettingsPanel';
import { PreviewCard } from './PreviewCard';
import './App.css';

const MainLayout = () => {
  const { theme } = useSettings();

  return (
    <div className={`app-wrapper ${theme}`}>
      <Header />
      <main>
        <SettingsPanel />
        <PreviewCard />
      </main>
    </div>
  );
};

function App() {
  return (
    <SettingsProvider>
      <MainLayout />
    </SettingsProvider>
  );
}

export default App;