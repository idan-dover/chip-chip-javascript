export function convertSQLDateToNormalDate(sqlDate) {
  const [year, month, day] = sqlDate.split("-");

  return `${day}/${month}/${year}`;
}

export function getSqlDateOfToday() {
  const year = new Date().getFullYear();
  let month = new Date().getMonth() + 1;
  let day = new Date().getDate();

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;

  return `${year}-${month}-${day}`;
}
