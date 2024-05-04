import { useAppContext } from "../../../context/appContext";
import "../../../css/calender.css";
import styles from "./actions.module.css";

const Actions = () => {
  const { date, selectRange, slotsAvailable, isLoading } = useAppContext();

  return (
    <>
      {slotsAvailable?.length > 0 ? (
        <>
          {date.length > 0 && selectRange ? (
            <p className="text-center">
              {date[0].toDateString()}
              &nbsp;-&nbsp;
              {date[1].toDateString()}
            </p>
          ) : (
            <p className={styles.right_top_heading}>
              {date.toDateString()} - AVAILABLE SLOTS
            </p>
          )}
        </>
      ) : (
        <>
          {isLoading ? (
            <p>Hold on....</p>
          ) : (
            <p>Please select a date to check available slot</p>
          )}
        </>
      )}
    </>
  );
};

export default Actions;
