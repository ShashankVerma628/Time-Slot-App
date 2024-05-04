import React, { useState } from "react";
import styles from "./singleSlot.module.css";
import CheckCircle from "../../assets/CheckCircle";
import { useAppContext } from "../../context/appContext";
const SingleSlot = ({ slot }) => {
  const { handleSelect, currentSelected } = useAppContext();
  const selected = slot?.id === currentSelected?.id;
  return (
    <div
      className={`${styles.slot_wrapper} ${
        selected ? styles.selected_slot : ""
      }`}
      onClick={() => handleSelect(slot?.id)}
    >
      <div className={`${styles.left} ${selected ? styles.selected_text : ""}`}>
        {slot?.start_date} - {slot?.end_date}
      </div>
      {selected && <CheckCircle />}
    </div>
  );
};

export default SingleSlot;
