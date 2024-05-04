export const formatDate = (inputDate) => {
  const date = new Date(inputDate);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};

export const addOneDay = (inputDate) => {
  const date = new Date(inputDate);

  date.setDate(date.getDate() + 1);

  return date;
};

export const formatTime = (inputDate) => {
  const date = new Date(inputDate);

  let hours = date.getHours();
  let minutes = date.getMinutes();

  const amPm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  minutes = String(minutes).padStart(2, "0");

  const formattedTime = `${hours}:${minutes} ${amPm}`;

  return formattedTime;
};
