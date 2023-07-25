import Form from "../../../components/Form";
import customerSchema from "../../../libs/zodSchemas/customerSchema";
import useUpdateCustomer from "./useUpdateCustomer";

function UpdateCustomerForm({ customer }) {
  const { update } = useUpdateCustomer();

  const onSubmit = (data) => {
    const toUpdate = {
      customerId: customer.id,
      customer: { id: customer.id, ...data },
    };

    update(toUpdate);
  };

  return (
    <Form schema={customerSchema} onSubmit={onSubmit}>
      <Form.Input name="firstName" defaultValue={customer.firstName} />
      <Form.Input name="lastName" defaultValue={customer.lastName} />
      <Form.Input name="email" defaultValue={customer.email} />
      <Form.Input name="password" defaultValue={customer.password} />
      <Form.Buttons>
        <Form.SubmitButton btnText="update" />
      </Form.Buttons>
    </Form>
  );
}

export default UpdateCustomerForm;
