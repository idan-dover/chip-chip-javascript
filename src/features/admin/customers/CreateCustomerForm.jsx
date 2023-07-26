import { useNavigate } from "react-router-dom";
import useCreateCustomer from "./useCreateCustomer";
import Form from "../../../components/Form";
import customerSchema from "../../../libs/zodSchemas/CustomerSchema";

function CreateCustomerForm() {
  const { createCustomer } = useCreateCustomer();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createCustomer(data);
    navigate("/admin/customers");
  };

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form to create your customer
      </h1>
      <Form schema={customerSchema} onSubmit={onSubmit}>
        <Form.Input name="firstName" />
        <Form.Input name="lastName" />
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

export default CreateCustomerForm;
