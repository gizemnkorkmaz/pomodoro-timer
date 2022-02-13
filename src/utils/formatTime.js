import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const formatTime = (seconds) =>
  dayjs.duration(seconds, "seconds").format("mm:ss");

export default formatTime;
