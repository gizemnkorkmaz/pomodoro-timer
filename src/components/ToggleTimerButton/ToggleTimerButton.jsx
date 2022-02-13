import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/CloseIcon.svg";

import styles from "./ToggleTimerButton.module.css";

const ToggleTimerButton = ({ isOpenCustomTimer, setIsOpenCustomTimer }) => (
  <span
    role="button"
    className={styles.SettingsIcon}
    onClick={() => setIsOpenCustomTimer(!isOpenCustomTimer)}
  >
    {isOpenCustomTimer ? <CloseIcon /> : <SettingsIcon />}
  </span>
);

export default ToggleTimerButton;
