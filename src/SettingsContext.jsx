import { createContext, useState, useEffect, useContext } from 'react';

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('app-settings');
    return saved ? JSON.parse(saved) : { theme: 'light', language: 'en' };
  });

  useEffect(() => {
    localStorage.setItem('app-settings', JSON.stringify(settings));
  }, [settings]);

  const setTheme = (theme) => setSettings(s => ({ ...s, theme }));
  const setLanguage = (language) => setSettings(s => ({ ...s, language }));
  const resetSettings = () => setSettings({ theme: 'light', language: 'en' });

  return (
    <SettingsContext.Provider value={{ ...settings, setTheme, setLanguage, resetSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSettings = () => useContext(SettingsContext);