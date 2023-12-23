// LanguageContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie

// Create a context
const LanguageContext = createContext();

// Create a custom hook to use the context
export function useLanguage() {
  return useContext(LanguageContext);
}

// Create a LanguageProvider component
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    // Try to read the language preference from cookies, default to 'english' if not found
    const savedLanguage = Cookies.get('language');
    console.log("get cookies")
    console.log(savedLanguage)
    return savedLanguage || 'ENGLISH';
  });

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'ENGLISH' ? 'HINDI' : 'ENGLISH'));
  };

  // Save the language preference to cookies when it changes
  useEffect(() => {
    Cookies.set('language', language, { expires: 365 }); // Save the language preference for a year
    console.log("useeffect ")
    console.log(language)
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

