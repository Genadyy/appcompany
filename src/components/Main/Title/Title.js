import React from "react";
import styles from "./Title.module.scss";

const Title = () => {
  return (
    <div className="container">
      <div className={styles.title}>
        <h2 className={styles.title_title}>
          Why{" "}
          <span>
            small business owners<br></br> love
          </span>{" "}
          AppCo?
        </h2>
        <p className={styles.title_text}>
          Our design projects are fresh and simple and will benefit your
          business<br></br> greatly. Learn more about our work!
        </p>
      </div>
    </div>
  );
};

export default Title;
