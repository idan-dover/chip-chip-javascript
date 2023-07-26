import { FaHouse } from "react-icons/fa6";
import Form from "../../components/Form";
import LinkButton from "../../components/LinkButton";
import loginSchema from "../../libs/zodSchemas/LoginSchema";
import useLogin from "./useLogin";

function LoginForm() {
  const { loginToApp } = useLogin();

  const onSubmit = async (data) => {
    loginToApp(data);
  };

  return (
    <>
      <Form schema={loginSchema} onSubmit={onSubmit}>
        <Form.Input name="email" type="email" />
        <Form.Input name="password" type="password" />
        <Form.Buttons>
          <Form.CancelButton btnText="clear" />
          <Form.SubmitButton btnText="login" />
        </Form.Buttons>
      </Form>
      <LinkButton to="/home">
        <FaHouse />
        <span>Back home</span>
      </LinkButton>
    </>
  );
}

export default LoginForm;
