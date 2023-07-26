import useDeleteCompany from "./useDeleteCompany";
import UpdateCompanyForm from "./UpdateCompanyForm";
import Table from "../../../components/Table";
import ModalUpdate from "../../../components/ModalUpdate";
import ModalDelete from "../../../components/ModalDelete";

function CompaniesTable({ companies }) {
  return (
    <Table>
      <Table.Header
        headers={["Company Name", "Email", "Password", "Coupons", ""]}
      />
      <Table.Body
        data={companies}
        render={(company) => <CompanyRow company={company} />}
      />
    </Table>
  );
}

function CompanyRow({ company }) {
  return (
    <tr
      key={company.id}
      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
    >
      <td className="px-4 py-2">{company.name}</td>
      <td className="px-4 py-2">{company.email}</td>
      <td className="px-4 py-2">{company.password}</td>
      <td className="px-4 py-2">{company.coupons.length} coupons</td>
      <td className="flex items-center justify-end px-4 py-2 space-x-2">
        <EditCompany company={company} />
      </td>
    </tr>
  );
}

function EditCompany({ company }) {
  const { remove, isLoading } = useDeleteCompany();
  return (
    <>
      <ModalDelete disabled={isLoading} removeFunc={() => remove(company.id)} />
      <ModalUpdate
        disabled={isLoading}
        render={<UpdateCompanyForm company={company} />}
      />
    </>
  );
}

export default CompaniesTable;
