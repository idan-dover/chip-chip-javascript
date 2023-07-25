import { createContext, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import { fromCamelCaseToSentence } from "../utils/expressions";

const FormContext = createContext();

function Form({ children, schema, onSubmit, withLabels = true }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({ mode: "all", resolver: zodResolver(schema) });

  return (
    <FormContext.Provider
      value={{ register, errors, isValid, isSubmitting, withLabels }}
    >
      <form
        className="flex flex-col px-3 py-3 space-y-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
}

function Input({
  name,
  type = "text",
  placeholder = `${fromCamelCaseToSentence(name)}...`,
  defaultValue = "",
}) {
  const { register, errors, withLabels } = useContext(FormContext);
  return (
    <>
      {withLabels && (
        <label
          className="font-mono text-sm text-gray-800 dark:text-gray-50"
          htmlFor={name}
        >{`${fromCamelCaseToSentence(name)}:`}</label>
      )}
      <input
        className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
        id={name}
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <span className="text-rose-500 dark:text-rose-300">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

function TextArea({
  name,
  type = "text",
  placeholder = `${fromCamelCaseToSentence(name)}...`,
  defaultValue = "",
}) {
  const { register, errors, withLabels } = useContext(FormContext);
  return (
    <>
      {withLabels && (
        <label
          className="font-mono text-sm text-gray-800 dark:text-gray-50"
          htmlFor={name}
        >{`${fromCamelCaseToSentence(name)}:`}</label>
      )}
      <textarea
        className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
        id={name}
        {...register(name)}
        type={type}
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      {errors[name] && (
        <span className="text-rose-500 dark:text-rose-300">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

function Select({ name, options = [], defaultValue = "" }) {
  const { register, errors, withLabels } = useContext(FormContext);

  return (
    <>
      {withLabels && (
        <label
          className="font-mono text-sm text-gray-800 dark:text-gray-50"
          htmlFor={name}
        >{`${fromCamelCaseToSentence(name)}:`}</label>
      )}
      <select
        name={name}
        className="w-full p-2.5 bg-white border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
        {...register(name)}
        defaultValue={defaultValue}
      >
        {options.map((option, i) => (
          <option key={`${option.value}-${i}`} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="text-rose-500 dark:text-rose-300">
          {errors[name].message}
        </span>
      )}
    </>
  );
}

function Buttons({ children }) {
  return (
    <div className="flex items-center justify-end px-4 py-3 space-x-7">
      {children}
    </div>
  );
}

function SubmitButton({ btnText = "submit" }) {
  const { isValid, isSubmitting } = useContext(FormContext);
  return (
    <Button
      variation="primary"
      onClick={() => {
        return;
      }}
      disabled={!isValid || isSubmitting}
    >
      {btnText}
    </Button>
  );
}
function CancelButton({ btnText = "reset" }) {
  return (
    <Button variation="secondary" type="reset">
      {btnText}
    </Button>
  );
}

Form.Input = Input;
Form.TextArea = TextArea;
Form.Select = Select;
Form.Buttons = Buttons;
Form.SubmitButton = SubmitButton;
Form.CancelButton = CancelButton;

export default Form;
