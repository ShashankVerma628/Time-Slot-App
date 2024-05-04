import React, { useState } from "react";
import styles from "./form.module.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import IconRight from "../../assets/IconRight";
import { useAppContext } from "../../context/appContext";
import Actions from "../CustomCalendar/Partials/Actions";
import IconDown from "../../assets/IconDown";
import SingleSlot from "../SingleSlot/SingleSlot";
import Loader from "../Loader/Loader";
import { formatDate, formatTime } from "../../utils";
const Form = () => {
  const {
    isActive,
    setIsActive,
    selected,
    setIsSelected,
    slotsAvailable,
    currentStep,
    isLoading,
    setCurrentStep,
    cleanState,
    currentSelected,
    isSlotSelected,
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
    <article
      className={`${styles.content_container} ${
        currentStep === 2 ? styles.content_center : ""
      }`}
    >
      <div className={styles.main_content}>
        {currentStep === 1 && (
          <>
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
                  {isLoading ? (
                    <Loader />
                  ) : (
                    <>
                      {slotsAvailable?.map((slot, index) => (
                        <SingleSlot slot={slot} index={index} />
                      ))}
                    </>
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {currentStep === 2 && (
        <div className={styles.success_container}>
          <h2 className={styles.success_heading}>Congratulations</h2>
          <p className={styles.para}>Your appointment has been booked at : </p>
          <div>
            <p className={styles.time_slot_para}>
              Date :{formatDate(slotsAvailable[currentSelected]?.start_time)}
            </p>
            <p className={styles.time_slot_para}>
              Time : {formatTime(slotsAvailable[currentSelected]?.start_time)} -{" "}
              {formatTime(slotsAvailable[currentSelected]?.end_time)}
            </p>
          </div>

          <button onClick={cleanState} className={styles.back_btn}>
            Go Back
          </button>
        </div>
      )}
      {currentStep === 1 && (
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
          {currentStep === 1 && (
            <div className={styles.bottom_right}>
              <button
                onClick={() => setCurrentStep(2)}
                className={`${styles.next_btn} ${
                  // slotsAvailable?.length === 0 && !isLoading && !isSlotSelected
                  !isSlotSelected ? styles.disabled_next_btn : ""
                }`}
                disabled={
                  // slotsAvailable?.length === 0 && !isLoading && !isSlotSelected
                  !isSlotSelected
                }
              >
                <span>Next</span>
                <IconRight />
              </button>
            </div>
          )}
        </div>
      )}
    </article>
  );
};

export default Form;
