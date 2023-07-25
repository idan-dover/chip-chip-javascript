import { useForm } from "react-hook-form";
import Button from "../../../components/Button";
import useUpdateCompany from "./useUpdateCompany";

function UpdateCompanyForm({ company }) {
  const { update, isLoading } = useUpdateCompany();

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
      companyId: company.id,
      company: { id: company.id, ...data },
    };

    update(toUpdate);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col items-start space-y-2 justify-normal">
        <label
          htmlFor="name"
          className="text-amber-500 text-md dark:text-amber-300"
        >
          Company name:
        </label>
        <input
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="name"
          defaultValue={company.name}
          placeholder="name"
          {...register("name", { required: "This field is required" })}
        />
        {errors.name && (
          <span className="text-red-500">{errors.name.message}</span>
        )}

        <label
          htmlFor="email"
          className="text-amber-500 text-md dark:text-amber-300"
        >
          Company email:
        </label>
        <input
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="email"
          defaultValue={company.email}
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
          Company password:
        </label>
        <input
          className="w-full px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          id="password"
          defaultValue={company.password}
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

export default UpdateCompanyForm;
