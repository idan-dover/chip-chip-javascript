import useUpdateCompany from "./useUpdateCompany";
import Form from "../../../components/Form";
import companySchema from "../../../libs/zodSchemas/CompanySchema";

function UpdateCompanyForm({ company }) {
  const { update } = useUpdateCompany();

  const onSubmit = (data) => {
    const toUpdate = {
      companyId: company.id,
      company: { id: company.id, ...data },
    };

    update(toUpdate);
  };

  return (
    <Form schema={companySchema} onSubmit={onSubmit}>
      <Form.Input name="name" defaultValue={company.name} />
      <Form.Input name="email" defaultValue={company.email} />
      <Form.Input name="password" defaultValue={company.password} />
      <Form.Buttons>
        <Form.SubmitButton btnText="update" />
      </Form.Buttons>
    </Form>
  );
}

export default UpdateCompanyForm;
