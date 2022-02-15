import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/CloseIcon.svg";

import styles from "./SettingsButton.module.css";

const ToggleTimerButton = ({ isOpenSettings, setIsOpenSettings }) => (
  <span
    role="button"
    className={styles.SettingsIcon}
    onClick={() => setIsOpenSettings(!isOpenSettings)}
  >
    {isOpenSettings ? <CloseIcon /> : <SettingsIcon />}
  </span>
);

export default ToggleTimerButton;
