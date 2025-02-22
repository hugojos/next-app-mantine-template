import dayjsPDM from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

require("dayjs/locale/es");

dayjsPDM.extend(relativeTime);
dayjsPDM.locale("es");

export default dayjsPDM;
