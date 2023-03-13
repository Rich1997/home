import { createContext, useContext, useState } from 'react';

export enum Theme {
    dark = 'dark',
    light = 'light',
}

export type ThemeContextType = {
    theme: Theme;
    setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
    theme: Theme.dark,
    setTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const pref = window.matchMedia('(prefers-color-scheme: dark)');

export const ThemeProvider = (props: { children: React.ReactNode }) => {
    const [themeState, setThemeState] = useState(
        localStorage.getItem('homeTheme') !== null
            ? (localStorage.getItem('homeTheme') as Theme)
            : pref.matches
            ? Theme.dark
            : Theme.light
    );

    return (
        <ThemeContext.Provider
            value={{ theme: themeState, setTheme: setThemeState }}
        >
            {props.children}
        </ThemeContext.Provider>
    );
};
