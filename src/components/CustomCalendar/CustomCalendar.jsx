import "../../css/calender.css";
import Actions from "./Partials/Actions";
import CalendarComponent from "./Partials/Calendar";
import styles from "./customCalender.module.css";

const CustomCalendar = ({ setDate, date }) => {
  return (
    <div className={styles.container}>
      <CalendarComponent setDate={setDate} date={date} />
      <Actions setDate={setDate} date={date} />
    </div>
  );
};

export default CustomCalendar;
