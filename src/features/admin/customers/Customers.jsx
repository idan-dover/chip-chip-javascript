import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import Loader from "../../../ui/Loader";
import useCustomers from "./useCustomers";
import CustomersTable from "./CustomersTable";

function Customers() {
  const { isLoadingCustomers, customers } = useCustomers();
  const navigate = useNavigate();
  if (isLoadingCustomers) {
    return <Loader variation="area" />;
  }

  return (
    <div className="px-3 py-2">
      <CustomersTable customers={customers} />;
      <div className="flex justify-end">
        <Button
          variation="primary"
          onClick={() => navigate("/admin/customers/create")}
        >
          create
        </Button>
      </div>
    </div>
  );
}

export default Customers;
