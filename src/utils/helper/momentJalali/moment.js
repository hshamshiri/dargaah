import moment from "jalali-moment";

export default function convertTimestampTojalali(timestamp) {
  moment.locale("fa");
  const convertedDate = moment.unix(timestamp).format("YYYY/MM/DD");
  return convertedDate;
}
