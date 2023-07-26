import useDeleteCustomer from "./useDeleteCustomer";
import UpdateCustomerForm from "./UpdateCustomerForm";
import Table from "../../../components/Table";
import ModalDelete from "../../../components/ModalDelete";
import ModalUpdate from "../../../components/ModalUpdate";

function CustomersTable({ customers }) {
  return (
    <Table>
      <Table.Header
        headers={["First name", "Last name", "Email", "Password", "Coupons"]}
      />
      <Table.Body
        data={customers}
        render={(customer) => <CustomerRow customer={customer} />}
      />
    </Table>
  );
}

function CustomerRow({ customer }) {
  return (
    <tr
      key={customer.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-4 py-2">{customer.firstName}</td>
      <td className="px-4 py-2">{customer.lastName}</td>
      <td className="px-4 py-2">{customer.email}</td>
      <td className="px-4 py-2">{customer.password}</td>
      <td className="px-4 py-2">{customer.coupons.length} coupons</td>
      <td className="flex items-center justify-end px-4 py-2 space-x-2">
        <EditCustomer customer={customer} />
      </td>
    </tr>
  );
}

function EditCustomer({ customer }) {
  const { remove, isLoading } = useDeleteCustomer();
  return (
    <>
      <ModalDelete
        disabled={isLoading}
        removeFunc={() => remove(customer.id)}
      />
      <ModalUpdate
        disabled={isLoading}
        render={<UpdateCustomerForm customer={customer} />}
      />
    </>
  );
}

export default CustomersTable;
