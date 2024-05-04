import React, { useState } from "react";
import styles from "./singleSlot.module.css";
import CheckCircle from "../../assets/CheckCircle";
import { useAppContext } from "../../context/appContext";
import { formatTime } from "../../utils";
const SingleSlot = ({ slot, index }) => {
  const { handleSelect, currentSelected } = useAppContext();
  const selected = index === currentSelected;
  return (
    <div
      className={`${styles.slot_wrapper} ${
        selected ? styles.selected_slot : ""
      }`}
      onClick={() => handleSelect(index)}
    >
      <div className={`${styles.left} ${selected ? styles.selected_text : ""}`}>
        {formatTime(slot?.start_time)} - {formatTime(slot?.end_time)}
      </div>
      {selected && <CheckCircle />}
    </div>
  );
};

export default SingleSlot;
