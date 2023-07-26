import Form from "../../components/Form";
import LinkButton from "../../components/LinkButton";
import { FaArrowRight, FaHouse } from "react-icons/fa6";
import useRegister from "./useRegister";
import { registerCompanySchema } from "../../libs/zodSchemas/RegisterSchema";

function RegisterCompanyForm() {
  const { registerToApp } = useRegister();

  const onSubmit = async (data) => {
    const user = {
      email: data.email,
      password: data.password,
      clientType: "COMPANY",
      params: {
        name: data.name,
      },
    };

    registerToApp(user);
  };

  return (
    <>
      <Form schema={registerCompanySchema} onSubmit={onSubmit}>
        <Form.Input name="name" />
        <Form.Input name="email" type="email" />
        <Form.Input name="password" type="password" />
        <Form.Input name="confirmPassword" type="password" />
        <Form.Buttons>
          <Form.CancelButton btnText="clear" />
          <Form.SubmitButton btnText="register" />
        </Form.Buttons>
      </Form>
      <LinkButton to="/register/customer">
        <FaArrowRight />
        <span>Are you a customer? Register here</span>
      </LinkButton>
      <LinkButton to="/home">
        <FaHouse />
        <span>Back home</span>
      </LinkButton>
    </>
  );
}

export default RegisterCompanyForm;
