import React, {createContext, useState} from "react";

export const ThemeContext = createContext(undefined)


type ThemeProviderProps = {
    children: React.ReactNode;
};

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}