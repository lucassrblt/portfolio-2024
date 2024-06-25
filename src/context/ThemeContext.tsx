import React, {createContext, useState} from "react";

type ThemeContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
};

type ThemeProviderProps = {
    children: React.ReactNode;
};

type ThemeState = string


export const ThemeContext = createContext<ThemeContextType>({
    theme: '',
    setTheme: () => {},
})
export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<ThemeState>('light')

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}