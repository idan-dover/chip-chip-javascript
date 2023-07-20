import Button from "../../ui/Button";

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
    </>
  );
}

export default AdminHeader;
