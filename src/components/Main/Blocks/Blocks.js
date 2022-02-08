import React from "react";
import styles from "./Blocks.module.scss";
import Block from "./../Block/Block";
import picture from "./../../../images/design.png";
import picture1 from "./../../../images/secure.png";
import picture2 from "./../../../images/ready.png";

const text1 = (
  <p className={styles.block_text}>
    Increase sales by showing true<br></br> dynamics of your website.
  </p>
);
const text2 = (
  <p className={styles.block_text}>
    Build your online store’s trust using<br></br> Social Proof & Urgency.
  </p>
);
const text3 = (
  <p className={styles.block_text}>
    Realize importance of social proof in<br></br> customer’s purchase decision.
  </p>
);
const Blocks = () => {
  return (
    <div className="container">
      <div className={styles.blocks}>
        <Block icon={picture} title="Clean Design" text={text1} />
        <Block icon={picture1} title="Secure Data" text={text2} />
        <Block icon={picture2} title="Retina Ready" text={text3} />
      </div>
    </div>
  );
};

export default Blocks;
