const dateNow = new Date();

// This seems like an utility file - it doesn't have to be CamelCased, can be just camelCased and use ".js" extension
export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getMonth = () => dateNow.getMonth();
export const getYear = () => dateNow.getFullYear();
