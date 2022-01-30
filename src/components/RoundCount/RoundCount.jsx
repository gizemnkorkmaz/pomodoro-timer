import React from "react";

import styles from "./RoundCount.module.css";

function RoundCount({ roundCount }) {
  return <div className={styles.RoundCount}>Round {roundCount}</div>;
}

export default RoundCount;
