import "../../../css/calender.css";

const Actions = ({ setDate, date, selectRange, setSelectRange }) => {
  return (
    <>
      {date.length > 0 && selectRange ? (
        <p className="text-center">
          {date[0].toDateString()}
          &nbsp;-&nbsp;
          {date[1].toDateString()}
        </p>
      ) : (
        <p className="text-center">{date.toDateString()}</p>
      )}
    </>
  );
};

export default Actions;
