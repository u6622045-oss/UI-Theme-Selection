import { SettingsProvider, useSettings } from './SettingsContext';
import { Header } from './Header';
import { SettingsPanel } from './SettingsPanel';
import { PreviewCard } from './PreviewCard';
import './App.css';

function AppContent() {
  const { theme } = useSettings();
  
  return (
    <div className={`app-container ${theme}`}>
      <Header />
      <SettingsPanel />
      <PreviewCard />
    </div>
  );
}

export default function App() {
  return (
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  );
}