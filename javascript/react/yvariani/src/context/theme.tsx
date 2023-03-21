import React, { createContext, useContext, ReactNode, useState } from "react";

import themes from "../themes";
/*
interface Theme {
  colors: {
    primary: string;
    secondary: string;
    font: string;
    background: string;
  };
}

interface PropsThemeContext {
  state: Theme;
  setState: React.Dispatch<React.SetStateAction<Theme>>;
}

type Props = {
  children: ReactNode;
};

const defaultValue = {
  state: themes.default,
  setState: () => {},
};

const ThemeContext = createContext<PropsThemeContext>(defaultValue);

function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(defaultValue.state);
  return (
    <ThemeContext.Provider value={{ state: theme, setState: setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export { ThemeProvider };
*/

interface Theme {
  primary: string;
  secondary: string;
  font: string;
  background: string;
}

interface IThemeContext {
  theme: Theme;
  changeTheme?: () => void;
}

const defaultState = {
  theme: themes.default,
};

const ThemeContext = React.createContext<IThemeContext>(defaultState);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState(defaultState.theme);

  const changeTheme = (theme: Theme = themes.default) => {
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
