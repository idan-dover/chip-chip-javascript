import { useNavigate } from "react-router-dom";
import useCreateCompany from "./useCreateCompany";
import Form from "../../../components/Form";
import companySchema from "../../../libs/zodSchemas/CompanySchema";

function CreateCompanyForm() {
  const { createCompany } = useCreateCompany();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createCompany(data);
    navigate("/admin/companies");
  };

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form to create your company
      </h1>
      <Form schema={companySchema} onSubmit={onSubmit}>
        <Form.Input name="name" />
        <Form.Input name="email" />
        <Form.Input name="password" />
        <Form.Buttons>
          <Form.CancelButton btnText="clear" />
          <Form.SubmitButton btnText="create" />
        </Form.Buttons>
      </Form>
    </>
  );
}

export default CreateCompanyForm;
