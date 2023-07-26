import { FaArrowRight, FaHouse } from "react-icons/fa6";
import Form from "../../components/Form";
import LinkButton from "../../components/LinkButton";
import useRegister from "./useRegister";
import { registerCustomerSchema } from "../../libs/zodSchemas/RegisterSchema";

function RegisterCustomerForm() {
  const { registerToApp } = useRegister();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
      clientType: "CUSTOMER",
      params: {
        firstName: data.firstName,
        lastName: data.lastName,
      },
    };

    registerToApp(user);
  };

  return (
    <>
      <Form schema={registerCustomerSchema} onSubmit={onSubmit}>
        <Form.Input name="firstName" />
        <Form.Input name="lastName" />
        <Form.Input name="email" type="email" />
        <Form.Input name="password" type="password" />
        <Form.Input name="confirmPassword" type="password" />
        <Form.Buttons>
          <Form.CancelButton btnText="clear" />
          <Form.SubmitButton btnText="register" />
        </Form.Buttons>
      </Form>
      <LinkButton to="/register/company">
        <FaArrowRight />
        <span>Are you a company? Register here</span>
      </LinkButton>
      <LinkButton to="/home">
        <FaHouse />
        <span>Back home</span>
      </LinkButton>
    </>
  );
}

export default RegisterCustomerForm;
