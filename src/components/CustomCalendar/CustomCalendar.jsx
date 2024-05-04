import "../../css/calender.css";
import CalendarComponent from "./Partials/Calendar";
import styles from "./customCalender.module.css";

const CustomCalendar = () => {
  return (
    <div className={styles.container}>
      <CalendarComponent />
    </div>
  );
};

export default CustomCalendar;
