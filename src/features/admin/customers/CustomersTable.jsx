import { FaPen, FaTrashCan } from "react-icons/fa6";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";
import useDeleteCustomer from "./useDeleteCustomer";
import UpdateCustomerForm from "./UpdateCustomerForm";

function CustomersTable({ customers }) {
  return (
    <table className="w-full my-5 text-sm text-left text-gray-800 dark:text-gray-50">
      <thead className="uppercase bg-gray-700 text-amber-500 dark:text-amber-300">
        <tr>
          <th className="px-4 py-2">Company Name</th>
          <th className="px-4 py-2">Email</th>
          <th className="px-4 py-2">Password</th>
          <th className="px-4 py-2">Coupons</th>
          <th className="px-4 py-2"></th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
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
        ))}
      </tbody>
    </table>
  );
}

function EditCustomer({ customer }) {
  const { remove, isLoading } = useDeleteCustomer();
  return (
    <Modal>
      <Modal.Open opens="update">
        <Button variation="round" disabled={isLoading}>
          <FaPen />
        </Button>
      </Modal.Open>
      <Modal.Open opens="delete">
        <Button variation="round" disabled={isLoading}>
          <FaTrashCan />
        </Button>
      </Modal.Open>
      <Modal.Window name="update">
        <UpdateCustomerForm customer={customer} />
      </Modal.Window>
      <Modal.Window name="delete">
        <div className="px-3 py-2 ml-auto">
          <p className="px-3 py-2 font-mono text-gray-800 text-md dark:text-gray-50 ">
            Are you sure you want to delete this customer?
          </p>
          <p className="px-3 py-4 font-mono text-red-800 text-md dark:text-red-300">
            This is permanent
          </p>
          <Button
            variation="primary"
            disabled={isLoading}
            onClick={() => remove(customer.id)}
          >
            yes
          </Button>
        </div>
      </Modal.Window>
    </Modal>
  );
}

export default CustomersTable;
