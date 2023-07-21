import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import useUpdateCustomer from "./useUpdateCustomer";

function UpdateCustomerForm({ customer }) {
  const { update, isLoading } = useUpdateCustomer();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (!data) {
      reset();
    }

    const toUpdate = {
      customerId: customer.id,
      customer: { id: customer.id, ...data },
    };

    update(toUpdate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-start space-y-2 justify-normal">
        <label
          htmlFor="firstName"
          className="text-amber-500 text-md dark:text-amber-300"
        >
          customer first name:
        </label>
        <input
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="firstName"
          defaultValue={customer.firstName}
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
          customer last name:
        </label>
        <input
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="lastName"
          defaultValue={customer.lastName}
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
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="email"
          defaultValue={customer.email}
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
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="password"
          defaultValue={customer.password}
          placeholder="password"
          {...register("password", { required: "This field is required" })}
        />
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </div>
      <div className="flex items-center justify-end w-full px-4 py-3 space-x-7">
        <Button
          variation="primary"
          onClick={() => {
            return;
          }}
          disabled={isLoading}
        >
          update
        </Button>
      </div>
    </form>
  );
}

export default UpdateCustomerForm;
