import React from 'react';

function LanguageDetailCard({ language }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        {language ? (
          <>
            <h2 className="card-title">{language.title}</h2>
            <p className="card-text">{language.description}</p>
          </>
        ) : (
          <p className="card-text">No language selected</p>
        )}
      </div>
    </div>
  );
}

export default LanguageDetailCard;