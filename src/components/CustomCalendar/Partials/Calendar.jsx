import Calendar from "react-calendar";
import "../../../css/calender.css";
import { useAppContext } from "../../../context/appContext";

const CalendarComponent = () => {
  const { date, handleDateSelect } = useAppContext();

  return <Calendar onChange={handleDateSelect} values={date} />;
};

export default CalendarComponent;
