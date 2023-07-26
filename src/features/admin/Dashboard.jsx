import { useCompanies } from "./companies/useCompanies";
import { useCustomers } from "./customers/useCustomers";
import Loader from "../../components/Loader";
import Button from "../../components/Button";
import ServerError from "../../components/ServerError";

function Dashboard() {
  const {
    isLoadingCompanies,
    companies,
    error: errorFetchingCompanies,
  } = useCompanies();
  const {
    isLoadingCustomers,
    customers,
    error: errorFetchingCustomers,
  } = useCustomers();

  if (errorFetchingCompanies || errorFetchingCustomers) {
    return <ServerError />;
  }

  if (isLoadingCompanies || isLoadingCustomers) {
    return <Loader variation="area" />;
  }

  return (
    <div className="px-4 py-4 dark:text-gray-50">
      <h1 className="px-3 pt-1 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">{`Hello admin, there are ${companies.length} companies and ${customers.length} customers`}</h1>
      <div className="flex items-center justify-start m-3 space-x-3">
        <Button to="/admin/companies" variation="primary">
          <span className="flex items-center justify-between space-x-1">
            to companies
          </span>
        </Button>
        <Button to="/admin/customers" variation="primary">
          <span className="flex items-center justify-between space-x-1">
            to customers
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;
