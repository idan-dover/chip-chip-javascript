import Form from "../../components/Form";
import loginSchema from "../../libs/zodSchemas/LoginSchema";
import useLogin from "./useLogin";

function LoginForm() {
  const { loginToApp } = useLogin();

  const onSubmit = async (data) => {
    loginToApp(data);
  };

  return (
    <Form schema={loginSchema} onSubmit={onSubmit}>
      <Form.Input name="email" />
      <Form.Input name="password" type="password" />
      <Form.Select
        name="clientType"
        options={[
          { value: "CUSTOMER", text: "customer" },
          { value: "COMPANY", text: "company" },
          { value: "ADMIN", text: "admin" },
        ]}
      />
      <Form.Buttons>
        <Form.CancelButton />
        <Form.SubmitButton />
      </Form.Buttons>
    </Form>
  );
}

export default LoginForm;
