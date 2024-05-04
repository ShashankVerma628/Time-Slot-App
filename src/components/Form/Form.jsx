import React, { useState } from "react";
import styles from "./form.module.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import IconRight from "../../assets/IconRight";
import { useAppContext } from "../../context/appContext";
import Actions from "../CustomCalendar/Partials/Actions";
import IconDown from "../../assets/IconDown";
import SingleSlot from "../SingleSlot/SingleSlot";
const Form = () => {
  const {
    date,
    setDate,
    isActive,
    setIsActive,
    selected,
    setIsSelected,
    handleSelect,
    slotsAvailable,
  } = useAppContext();

  const availableSlots = [
    {
      id: 1,
      text: "30 min",
      value: 30,
    },
    {
      id: 2,
      text: "45 min",
      value: 45,
    },
    {
      id: 3,
      text: "60 min",
      value: 60,
    },
  ];

  return (
    <article className={styles.content_container}>
      <div className={styles.main_content}>
        <div className={styles.content_left_container}>
          <div className={styles.top}>
            <h3 className={styles.top_heading}>Test Service</h3>
            <p className={styles.region}>
              <span className={styles.zone}>Timezone: </span>Asia/Kolkata
            </p>
          </div>
          <CustomCalendar />
        </div>
        <div className={styles.content_right_container}>
          <div className={styles.top}>
            <label className={styles.right_top_heading} for="slots">
              Select From Variants
            </label>
            <div className={styles.dropdown}>
              <div
                onClick={(e) => {
                  setIsActive(!isActive);
                }}
                className={styles.dropdown_btn}
              >
                {selected}
                <span
                  className={`${isActive ? "" : styles.icon_down} ${
                    styles.select_icon
                  }`}
                >
                  <IconDown />
                </span>
              </div>
              <div
                className={styles.dropdown_content}
                style={{ display: isActive ? "block" : "none" }}
              >
                {availableSlots?.map((slot) => (
                  <div
                    onClick={(e) => {
                      setIsSelected(slot?.text);
                      setIsActive(!isActive);
                    }}
                    className={styles.item}
                  >
                    {slot?.text}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.right_bottom}>
            <Actions />
            <div className={styles.slot_list}>
              {slotsAvailable?.map((slot) => (
                <SingleSlot slot={slot} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_left}>
          Powered by{" "}
          <a
            target="_blank"
            className={styles.bottom_left_link}
            href="https://google.com"
          >
            Appointer
          </a>
        </div>
        <div className={styles.bottom_right}>
          <button className={styles.next_btn}>
            <span>Next</span>
            <IconRight />
          </button>
        </div>
      </div>
    </article>
  );
};

export default Form;
