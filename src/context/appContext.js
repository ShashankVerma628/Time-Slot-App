import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  function handleBlur(e) {
    console.log(e);
  }
  const contextValues = {
    date,
    setDate,
    isActive,
    setIsActive,
    selected,
    setIsSelected,
    handleBlur,
  };
  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export default AppProvider;

export const useAppContext = () => {
  const appContext = useContext(AppContext);
  if (appContext === undefined) {
    throw new Error("Something is Wrong in the Context");
  }
  return appContext;
};
