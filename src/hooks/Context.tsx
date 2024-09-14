import React, { useContext, createContext } from 'react';

const ThemeContext = createContext<{ background: string; color: string } | undefined>(undefined);

function ThemeButton(): JSX.Element {
    const theme = useContext(ThemeContext);

    return (
        <button style={{ background: theme?.background, color: theme?.color }}>
            I am styled by theme context!
        </button>
    );
}

function App(): JSX.Element {
    const theme = {
        background: 'black',
        color: 'white',
    };

    return (
        <ThemeContext.Provider value={theme}>
            <ThemeButton />
        </ThemeContext.Provider>
    );
}

export default App;
