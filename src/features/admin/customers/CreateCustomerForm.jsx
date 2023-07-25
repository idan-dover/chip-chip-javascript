import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/Button";
import { validateEmail } from "../../../utils/expressions";
import useCreateCustomer from "./useCreateCustomer";

function CreateCustomerForm() {
  const { createCustomer, isLoading } = useCreateCustomer();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data) {
      reset();
    }

    if (!validateEmail(data.email)) {
      setError("email", {
        type: "manual",
        message: "this is not an email",
      });
      return;
    }

    createCustomer(data);
    navigate("/admin/customers");
  };

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form to create your customer
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start space-y-2 justify-normal">
          <label
            htmlFor="firstName"
            className="text-amber-500 text-md dark:text-amber-300"
          >
            first name:
          </label>
          <input
            className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            id="firstName"
            placeholder="first name"
            {...register("firstName", { required: "This field is required" })}
          />
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}

          <label
            htmlFor="lastName"
            className="text-amber-500 text-md dark:text-amber-300"
          >
            first name:
          </label>
          <input
            className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            id="lastName"
            placeholder="last name"
            {...register("lastName", { required: "This field is required" })}
          />
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}

          <label
            htmlFor="email"
            className="text-amber-500 text-md dark:text-amber-300"
          >
            customer email:
          </label>
          <input
            className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            id="email"
            placeholder="email"
            {...register("email", { required: "This field is required" })}
          />
          {errors.email && (
            <span className="text-red-500">{errors.email.message}</span>
          )}

          <label
            htmlFor="password"
            className="text-amber-500 text-md dark:text-amber-300"
          >
            customer password:
          </label>
          <input
            className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            id="password"
            placeholder="password"
            {...register("password", { required: "This field is required" })}
          />
          {errors.password && (
            <span className="text-red-500">{errors.password.message}</span>
          )}
        </div>
        <div className="flex items-center justify-end w-2/3 px-4 py-3 space-x-7">
          <Button type="reset" variation="secondary" disabled={isLoading}>
            clear
          </Button>
          <Button
            variation="primary"
            onClick={() => {
              return;
            }}
            disabled={isLoading}
          >
            create
          </Button>
        </div>
      </form>
    </>
  );
}

export default CreateCustomerForm;
