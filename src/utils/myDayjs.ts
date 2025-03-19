import myDayjs from "dayjs";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
// import relativeTime from "dayjs/plugin/relativeTime";

require("dayjs/locale/es");

// myDayjs.extend(relativeTime);
myDayjs.locale("es");
myDayjs.extend(LocalizedFormat);

export default myDayjs;
