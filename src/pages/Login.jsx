import { useForm } from "react-hook-form";
import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="grid grid-cols-3 h-screen w-screen dark:bg-gray-800">
      <div className="col-span-1 mx-3 py-8 bg-lime-300 dark:bg-lime-600">
        <div className="flex items-center space-x-3 mb-10  border-b-2 border-amber-300 ">
          <Logo onlyLogo={false} />
          <h1 className="px-3 md:px-8  py-2 font-serif text-5xl font-bold text-transparent bg-gradient-to-r from-amber-600  to-amber-400 bg-clip-text">
            Log In
          </h1>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-6"
        >
          <input
            className="px-4 py-2 text-sm transition-all duration-300 border rounded-full border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            placeholder="email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-red-500">This field is required</span>
          )}
          <input
            className="px-4 py-2 text-sm transition-all duration-300 border rounded-full border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0  md:px-6 md:py-3"
            placeholder="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">This field is required</span>
          )}
          <div className="flex items-center justify-end space-x-7 px-4 py-3">
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
        <h1 className="px-3 md:px-8  py-2 font-serif text-5xl font-bold text-lime-500 dark:text-lime-300 bg-clip-text uppercase mb-8">
          Happy to see you back
        </h1>
        <h2 className="px-3 md:px-8  py-2 font-serif text-2xl font-bold text-lime-500 dark:text-lime-300 bg-clip-text uppercase mb-8">
          Which chick are you
        </h2>
      </div>
    </div>
  );
}

export default Login;
