import dayjs from "dayjs";

function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY HH:mm");
}

export default formatDate;

console.log(formatDate("2026-04-13T11:20:49.822Z"));
