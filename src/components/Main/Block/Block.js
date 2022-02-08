import React from "react";
import styles from "./Block.module.scss";
//import picture from "./../images/design.png";

const Block = (props) => {
  return (
    <div className={styles.block}>
      <img src={props.icon} alt="creativity" />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  );
};

export default Block;
