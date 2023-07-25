import Button from "../../components/Button";
import LogoutButton from "../../components/LogoutButton";

function AdminHeader() {
  return (
    <>
      <Button to="/admin/dashboard" variation="primary">
        <span>dashboard</span>
      </Button>
      <Button to="/admin/companies" variation="primary">
        <span className="flex items-center justify-between space-x-1">
          companies
        </span>
      </Button>
      <Button to="/admin/customers" variation="primary">
        <span className="flex items-center justify-between space-x-1">
          customers
        </span>
      </Button>
      <LogoutButton />
    </>
  );
}

export default AdminHeader;
