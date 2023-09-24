"use client";
import { ThemeProvider } from "next-themes";
import { useReducer, type FC, type ReactNode, useMemo } from "react";
import Context from "../context/context";
import combineReducers, { InitState } from "..";
import globalReducer from "../reducer/global";
import portofolioReducer from "../reducer/portofolio";

interface ProvidersProps {
  children: ReactNode;
}

const rootReducer = combineReducers({
  globalReducer,
  portofolioReducer,
});

const Providers: FC<ProvidersProps> = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, InitState);
  const store = useMemo(() => [state, dispatch], [state]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Context.Provider value={store}>{children}</Context.Provider>
    </ThemeProvider>
  );
};

export default Providers;
