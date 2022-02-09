import React from "react";
import styles from "./Footer.module.scss";
import FooterText from "./../FooterText/FooterText";

const Footer = () => {
  return (
    <div className="container">
      <div className={styles.footer}>
        <div className={styles.footer_form}>
         
          <button className={styles.footer_btn}>Subscribe</button>
        </div>
        <FooterText />
      </div>
    </div>
  );
};

export default Footer;


/*
<input
className={styles.footer_input}
placeholder="Enter your email"
></input>*/