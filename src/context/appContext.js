import { createContext, useContext, useState } from "react";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const [currentSelected, setCurrentSelected] = useState({});
  const [slotsAvailable, setSlotsAvailable] = useState([
    {
      id: 1,
      start_date: "04:00 AM",
      end_date: "04:30 AM",
    },
    {
      id: 2,
      start_date: "05:00 AM",
      end_date: "05:30 AM",
    },
    {
      id: 3,
      start_date: "04:00 PM",
      end_date: "04:30 PM",
    },
    {
      id: 4,
      start_date: "06:00 AM",
      end_date: "08:30 AM",
    },
  ]);
  function handleBlur(e) {
    console.log(e);
  }
  const handleSelect = (id) => {
    slotsAvailable?.map((slot) => {
      if (slot?.id == id) {
        setCurrentSelected(slot);
      }
    });
  };
  const contextValues = {
    date,
    setDate,
    isActive,
    setIsActive,
    selected,
    setIsSelected,
    handleBlur,
    slotsAvailable,
    handleSelect,
    currentSelected,
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
