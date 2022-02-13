import styles from "./CurrentRound.module.css";

const CurrentRound = ({ currentRound }) => (
  <div className={styles.CurrentRound}>Round {currentRound}</div>
);

export default CurrentRound;
