import { createContext, useState, useContext } from "react";

interface AppContextInterface {
  text: string;
  setText: (text: string) => void;
}

export const AppContext = createContext<AppContextInterface>(
  {} as AppContextInterface
);

// add provider
export const AppProvider = ({ children }: any) => {
  const [text, setText] = useState("");

  return (
    <AppContext.Provider
      value={{
        text,
        setText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useWeb3 must be used within a Web3Provider");
  }
  return context;
};
