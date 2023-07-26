import Empty from "../components/Empty";

function Table({ children }) {
  return (
    <table className="w-full my-5 text-sm text-left text-gray-800 dark:text-gray-50">
      {children}
    </table>
  );
}

function Header({ headers = [] }) {
  return (
    <thead className="uppercase bg-gray-700 text-amber-500 dark:text-amber-300">
      {headers.map((header, idx) => (
        <th key={`${header}-${idx}`} className="px-4 py-2">
          {header}
        </th>
      ))}
    </thead>
  );
}

function Row({ children }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {children}
    </tr>
  );
}
function Body({ data, render, resource = "data" }) {
  if (data.length === 0) {
    return <Empty resource={resource}>No data to show in the moment</Empty>;
  }

  return data.map(render);
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;

export default Table;
