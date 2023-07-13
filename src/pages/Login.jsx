import { useForm } from "react-hook-form";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import { login } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = await login(data);
    if (!userInfo) {
      reset();
      return;
    }

    switch (userInfo.clientType) {
      case "CUSTOMER":
        navigate("/customer");
        break;
      case "COMPANY":
        navigate("/company");
        break;
      case "ADMIN":
        navigate("/admin");
        break;
    }
    reset();
  };

  return (
    <div className="grid w-screen h-screen grid-cols-3 dark:bg-gray-800">
      <div className="col-span-1 py-8 mx-3 bg-lime-300 dark:bg-lime-600">
        <div className="flex items-center mb-10 space-x-3 border-b-2 border-amber-300 ">
          <Logo onlyLogo={true} />
          <h1 className="px-3 py-2 font-serif text-5xl font-bold text-transparent md:px-8 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text">
            Log In
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <input
            className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          <select
            name="clientType"
            className="w-full p-2.5 bg-white border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
            {...register("clientType", { required: true })}
          >
            <option value="CUSTOMER">customer</option>
            <option value="COMPANY">company</option>
            <option value="ADMIN">admin</option>
          </select>
          <div className="flex items-center justify-end px-4 py-3 space-x-7">
            <Button type="reset" variation="secondary">
              Cancel
            </Button>
            <Button
              variation="primary"
              onClick={() => {
                return;
              }}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      <div className="col-span-2 px-3 py-4">
        <h1 className="px-3 py-2 mb-8 font-serif text-5xl font-bold uppercase md:px-8 text-lime-500 dark:text-lime-300 bg-clip-text">
          Happy to see you back
        </h1>
        <h2 className="px-3 py-2 mb-8 font-serif text-2xl font-bold uppercase md:px-8 text-lime-500 dark:text-lime-300 bg-clip-text">
          Which chick are you
        </h2>
      </div>
    </div>
  );
}

export default Login;
