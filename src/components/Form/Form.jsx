import React, { useState } from "react";
import styles from "./form.module.css";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import IconRight from "../../assets/IconRight";
const Form = () => {
  const [date, setDate] = useState(new Date());

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
          <CustomCalendar date={date} setDate={setDate} />
        </div>
        <div className={styles.content_right_container}>sldjlkjdflkj</div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottom_left}>
          Powered by{" "}
          <a
            target="_blank"
            className={styles.bottom_left_link}
            href="https://google.com"
          >
            Appointo
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
