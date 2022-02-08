import React from "react";
import styles from "./FooterUser.module.scss";

const FooterUser = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.footer_logo}>AppCo</span>
      <span className={styles.footer_rights}>
        All rights reserved by ThemeTags
      </span>
      <span className={styles.footer_copy}>Copyrights © 2019.</span>
    </div>
  );
};

export default FooterUser;
