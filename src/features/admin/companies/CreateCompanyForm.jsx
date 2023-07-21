import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCreateCompany from "./useCreateCompany";
import Button from "../../../ui/Button";

function CreateCompanyForm() {
  const { createCompany, isLoading } = useCreateCompany();
  const navigate = useNavigate();

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

    createCompany(data);
    navigate("/admin/companies");
  };

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form to create your company
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-start space-y-2 justify-normal">
          <label
            htmlFor="name"
            className="text-amber-500 text-md dark:text-amber-300"
          >
            Company name:
          </label>
          <input
            className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
            id="name"
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
            Company password:
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
            Cancel
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

export default CreateCompanyForm;
