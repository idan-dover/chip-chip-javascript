import { FaPlus } from "react-icons/fa6";
import Button from "../../ui/Button";

function CompanyHeader() {
  return (
    <>
      <Button to="/company/info" variation="primary">
        <span>info</span>
      </Button>
      <Button to="/company/create" variation="primary">
        <span className="flex items-center justify-between space-x-1">
          <FaPlus /> <span>create</span>
        </span>
      </Button>
    </>
  );
}

export default CompanyHeader;
