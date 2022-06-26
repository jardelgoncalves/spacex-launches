import { createContext } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";
import { GlobalStyles } from "styles/global";

import type { WithChildren } from "interfaces/with-children";

type SettingsProviderProps = WithChildren & {}
type InitialValuesType = {}
const INITIAL_VALUES = {} as InitialValuesType

const SettingsContext = createContext(INITIAL_VALUES)

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  return (
    <SettingsContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </SettingsContext.Provider>
  )
}

