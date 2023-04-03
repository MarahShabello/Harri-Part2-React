import React, { useState, createContext } from 'react';

const ThemeContext = createContext();
function ThemeProvider(props) {
  const [theme, setTheme] = useState(false)
  function toggleTheme(){
    setTheme(!theme);
  }
  return (
    <>
      <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
      </ThemeContext.Provider>
    </>
  )
}

export { ThemeContext, ThemeProvider };