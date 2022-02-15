import styles from "./Footer.module.css";

import { ReactComponent as TwitterLogo } from "../../assets/icons/TwitterIcon.svg";
import { ReactComponent as GitHubLogo } from "../../assets/icons/GithubIcon.svg";

const Footer = () => (
  <footer className={styles.Footer}>
    <a
      href="https://github.com/gizemnkorkmaz/pomodoro-timer"
      target="_blank"
      rel="noreferrer"
      className={styles.Link}
    >
      <GitHubLogo />
    </a>
    <a
      href="https://twitter.com/gizemnkorkmaz"
      target="_blank"
      rel="noreferrer"
      className={styles.Link}
    >
      <TwitterLogo />
    </a>
  </footer>
);

export default Footer;
