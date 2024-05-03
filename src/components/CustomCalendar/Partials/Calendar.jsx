import Calendar from "react-calendar";
import "../../../css/calender.css";

const CalendarComponent = ({ setDate, date }) => {
  return <Calendar onChange={setDate} value={date} s />;
};

export default CalendarComponent;
