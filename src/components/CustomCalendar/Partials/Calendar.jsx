import Calendar from "react-calendar";
import "../../../css/calender.css";
import { useAppContext } from "../../../context/appContext";

const CalendarComponent = () => {
  const { setDate, date } = useAppContext();

  return <Calendar onChange={setDate} values={date} />;
};

export default CalendarComponent;
