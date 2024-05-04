import { useAppContext } from "../../context/appContext";
import "../../css/calender.css";
import Actions from "./Partials/Actions";
import CalendarComponent from "./Partials/Calendar";
import styles from "./customCalender.module.css";

const CustomCalendar = () => {
  const { setDate, date } = useAppContext();
  return (
    <div className={styles.container}>
      <CalendarComponent />
    </div>
  );
};

export default CustomCalendar;
