import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";

dayjs.extend(duration);

const formatTime = (seconds) =>
  dayjs
    .duration({
      seconds: seconds % 60,
      minutes: Math.floor(seconds / 60),
    })
    .format("mm:ss");

export default formatTime;
