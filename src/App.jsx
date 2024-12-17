import React, { useState } from 'react';
import LanguageButton from './components/LanguageButton';
import LanguageDetailCard from './components/LanguageDetailCard';
import languages from './data/languages.js';


function App() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Linguaggi del web</h1>
      <div className="d-flex gap-2">
        {languages.map((language) => (
          <LanguageButton
            key={language.title}
            language={language}
            isSelected={selectedLanguage?.title === language.title}
            onClick={() => setSelectedLanguage(language)}
          />
        ))}
      </div>
      <LanguageDetailCard language={selectedLanguage} />
    </div>
  );
}

export default App;