import React from "react";

import styles from "./RoundCount.module.css";

function RoundCount({ roundCount }) {
  return <div className={styles.RoundCount}>#{roundCount}</div>;
}

export default RoundCount;
