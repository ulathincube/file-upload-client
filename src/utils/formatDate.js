import dayjs from "dayjs";

function formatDate(dateString) {
  return dayjs(dateString).format("DD/MM/YYYY HH:mm");
}

export default formatDate;
