import React from "react";
import styles from "./FooterText.module.scss";

const FooterText = () => {
  return (
    <div className={styles.footer_text}>
      <span className={styles.footer_logo}>AppCo</span>
      <span className={styles.footer_rights}>
        All rights reserved by ThemeTags
      </span>
      <span className={styles.footer_copy}>Copyrights © 2019.</span>
    </div>
  );
};

export default FooterText;
