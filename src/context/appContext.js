import { createContext, useContext, useEffect, useState } from "react";
import useToast from "../hooks/useToast";
import { getSlotsApi } from "../api/api";
import { addOneDay, formatDate, getLastDateOfCurrentMonth } from "../utils";

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const [isActive, setIsActive] = useState(false);
  const [selected, setIsSelected] = useState("Choose one");
  const [currentSelected, setCurrentSelected] = useState(null);
  const [isSlotSelected, setIsSlotSelected] = useState(false);
  const [slotsAvailable, setSlotsAvailable] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [currentSelectedDate, setCurrentSelectedDate] = useState("");
  const [selectRange, setSelectRange] = useState(false);
  const toast = useToast();

  const getSlots = async (startDate, endDate) => {
    try {
      const result = await getSlotsApi(startDate, endDate);
      if (result?.status == 200) {
        setSlotsAvailable(result?.data);
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
    setIsSlotSelected(false);
    setIsLoading(true);
    setDate(newDate);
    setSelectRange(true);

    const formattedDate = formatDate(newDate);
    const endDate = formatDate(addOneDay(newDate));

    if (endDate) {
      await getSlots(formattedDate, endDate);
    }
  };

  const handleSelect = (index, date, startTime, endTime) => {
    setIsSlotSelected(true);
    setCurrentSelectedDate({
      date,
      startTime,
      endTime,
    });
    slotsAvailable?.map((slot, slotIndex) => {
      if (index === slotIndex) {
        setCurrentSelected(index);
      }
    });
  };

  const fetchInitialSlots = async () => {
    const startDate = formatDate(new Date());
    const endDate = formatDate(getLastDateOfCurrentMonth());
    await getSlots(startDate, endDate);
  };

  useEffect(() => {
    fetchInitialSlots();
  }, []);

  const cleanState = () => {
    setDate(new Date());
    setIsActive(false);
    setIsSelected("Choose one");
    setCurrentSelected(0);
    setSlotsAvailable([]);
    setCurrentStep(1);
    setIsLoading(false);
    setIsSlotSelected(false);
    setCurrentSelectedDate("");
    fetchInitialSlots();
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
    isSlotSelected,
    setIsSlotSelected,
    cleanState,
    setSelectRange,
    selectRange,
    currentSelectedDate,
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
