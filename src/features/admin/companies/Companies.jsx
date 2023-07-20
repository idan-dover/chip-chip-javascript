import { useNavigate } from "react-router-dom";
import Button from "../../../ui/Button";
import Loader from "../../../ui/Loader";
import CompaniesTable from "./CompaniesTable";
import { useCompanies } from "./useCompanies";

function Companies() {
  const { isLoadingCompanies, companies } = useCompanies();
  const navigate = useNavigate();
  if (isLoadingCompanies) {
    return <Loader variation="area" />;
  }

  return (
    <div className="px-3 py-2">
      <CompaniesTable companies={companies} />;
      <div className="flex justify-end">
        <Button
          variation="primary"
          onClick={() => navigate("/admin/companies/create")}
        >
          create
        </Button>
      </div>
    </div>
  );
}

export default Companies;
