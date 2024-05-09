import React, { useState } from "react";
import styles from "./singleSlot.module.css";
import CheckCircle from "../../assets/CheckCircle";
import { useAppContext } from "../../context/appContext";
import { formatTime } from "../../utils";
const SingleSlot = ({ slot, index, date }) => {
  const { handleSelect, currentSelected } = useAppContext();
  const selected = index === currentSelected;
  const startTime = slot?.start_time;
  const endTime = slot?.end_time;
  return (
    <div
      className={`${styles.slot_wrapper} ${
        selected ? styles.selected_slot : ""
      }`}
      onClick={() => handleSelect(index, date, startTime, endTime)}
    >
      <div className={`${styles.left} ${selected ? styles.selected_text : ""}`}>
        {formatTime(slot?.start_time)} - {formatTime(slot?.end_time)}
      </div>
      {selected && <CheckCircle />}
    </div>
  );
};

export default SingleSlot;
