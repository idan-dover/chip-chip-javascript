export function convertSQLDateToNormalDate(sqlDate) {
  const [year, month, day] = sqlDate.split("-");

  return `${day}/${month}/${year}`;
}
