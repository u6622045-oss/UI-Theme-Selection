import { useSettings } from './SettingsContext';

export const PreviewCard = () => {
  const { theme, language } = useSettings();
  
  const content = {
    en: "This is your preference preview.",
    th: "นี่คือหน้าตัวอย่างการตั้งค่า"
  };

  return (
    <div className={`card ${theme}`}>
      <p><strong>Current Theme:</strong> {theme}</p>
      <p><strong>Current Language:</strong> {language}</p>
      <p>{content[language]}</p>
    </div>
  );
};