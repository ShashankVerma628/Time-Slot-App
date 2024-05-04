import { useAppContext } from "../../../context/appContext";
import "../../../css/calender.css";
import styles from "./actions.module.css";

const Actions = () => {
  const { setDate, date, selectRange } = useAppContext();

  return (
    <>
      {date.length > 0 && selectRange ? (
        <p className="text-center">
          {date[0].toDateString()}
          &nbsp;-&nbsp;
          {date[1].toDateString()}
        </p>
      ) : (
        <p className={styles.right_top_heading}>{date.toDateString()}</p>
      )}
    </>
  );
};

export default Actions;
