"use client";
import { ReactNode, createContext } from "react";

export const MainContext = createContext({
});
interface ProviderProps {
  children: ReactNode;
}
export const MainContextProvider = ({ children }: ProviderProps) => {
  
  return (
    <MainContext.Provider value={{    }}>
      {children}
    </MainContext.Provider>
  );
};
