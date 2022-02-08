import React from "react";
import styles from "./UsersStatistic.module.scss";
import HeaderUser from "./HeaderUser/HeaderUser";
import Statistic from "./Statistic/Statistic";
import FooterUser from "./FooterUser/FooterUser";

const UsersStatistic = (props) => {
  return (
    <div className={styles.statistic}>
      <HeaderUser />
      <Statistic
        handleMouse={props.handleMouse}
        handleClick={props.handleClick}
        id={props.id}
        name={props.name}
        lastName={props.lastName}
        pageNumber={props.pageNumber}
        //className={props.className}
      />
      <FooterUser />
    </div>
  );
};

export default UsersStatistic;
