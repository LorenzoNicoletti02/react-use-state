import React from 'react';

function LanguageButton({ language, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${isSelected ? 'btn-success' : 'btn-outline-secondary'}`}
    >
      {language.title}
    </button>
  );
}

export default LanguageButton;