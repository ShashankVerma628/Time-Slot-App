import { createContext, useContext, useState } from "react";
import useToast from "../hooks/useToast";
import { getSlotsApi } from "../api/api";
import { addOneDay, formatDate } from "../utils";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const [currentSelected, setCurrentSelected] = useState(0);
  const [slotsAvailable, setSlotsAvailable] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const getSlots = async (startDate, endDate) => {
    try {
      const result = await getSlotsApi(startDate, endDate);
      if (result?.status == 200) {
        setSlotsAvailable(result?.data[0]?.slots);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("error", error);
      setIsLoading(false);
      toast(error?.message, "error");
    }
  };

  const handleDateSelect = async (newDate) => {
    setCurrentSelected(null);
    setIsLoading(true);
    setDate(newDate);

    const formattedDate = formatDate(newDate);

    const endDate = formatDate(addOneDay(newDate));
    await getSlots(formattedDate, endDate);
  };

  const handleSelect = (index) => {
    slotsAvailable?.map((slot, slotIndex) => {
      if (index === slotIndex) {
        setCurrentSelected(index);
      }
    });
  };

  const cleanState = () => {
    setDate(new Date());
    setIsActive(false);
    setIsSelected("Choose one");
    setCurrentSelected(0);
    setSlotsAvailable([]);
    setCurrentStep(1);
    setIsLoading(false);
  };

  const contextValues = {
    date,
    setDate,
    isActive,
    setIsActive,
    selected,
    setIsSelected,
    slotsAvailable,
    handleSelect,
    currentSelected,
    handleDateSelect,
    isLoading,
    setCurrentStep,
    currentStep,
    cleanState,
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
