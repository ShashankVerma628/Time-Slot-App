import Calendar from "react-calendar";
import "../../../css/calender.css";
import { useAppContext } from "../../../context/appContext";
import { tileDisabled } from "../../../utils";

const CalendarComponent = () => {
  const { date, handleDateSelect } = useAppContext();

  return (
    <Calendar
      onChange={handleDateSelect}
      values={date}
      tileDisabled={tileDisabled}
    />
  );
};

export default CalendarComponent;
