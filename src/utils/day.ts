import { default as day } from "dayjs";
import "dayjs/locale/es";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import LocalizedFormat from "dayjs/plugin/localizedFormat";

// myDayjs.extend(relativeTime);
day.locale("es");
day.extend(LocalizedFormat);
day.extend(isSameOrAfter);

export default day;
