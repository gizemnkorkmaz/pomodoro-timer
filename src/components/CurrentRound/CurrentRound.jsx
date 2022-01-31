import React from "react";

import styles from "./CurrentRound.module.css";

function CurrentRound({ currentRound }) {
  return <div className={styles.CurrentRound}>Round {currentRound}</div>;
}

export default CurrentRound;
