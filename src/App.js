import Header from "./components/Header/Header";
import Timer from "./components/Timer/Timer";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Timer />
    </div>
  );
}

export default App;
