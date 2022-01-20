import { createContext, useContext } from "react";

export interface ContextState {
  theme: string;
  setTheme: (arg: string | ((theme?: string) => string)) => void;
}

export const AppContext = createContext<ContextState>({
  theme: "dark",
  setTheme: () => {},
});
export const AppProvider = AppContext.Provider;
export const useAppContext = () => useContext(AppContext);
