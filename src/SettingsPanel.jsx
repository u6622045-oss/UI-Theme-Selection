import { useSettings } from './SettingsContext';

export const SettingsPanel = () => {
  const { theme, language, setTheme, setLanguage, resetSettings } = useSettings();

  return (
    <section style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>Settings</h3>
      <div>
        Theme: 
        <button onClick={() => setTheme('light')} disabled={theme === 'light'}>Light</button>
        <button onClick={() => setTheme('dark')} disabled={theme === 'dark'}>Dark</button>
      </div>
      <br />
      <div>
        Language: 
        <button onClick={() => setLanguage('en')} disabled={language === 'en'}>EN</button>
        <button onClick={() => setLanguage('th')} disabled={language === 'th'}>TH</button>
      </div>
      <br />
      <button onClick={resetSettings} style={{ color: 'red' }}>Reset to Defaults</button>
    </section>
  );
};