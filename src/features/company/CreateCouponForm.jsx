import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useCreateCoupon from "./useCreateCoupon";
import { getSqlDateOfToday } from "../../utils/dates";
import { useNavigate } from "react-router-dom";

function CreateCouponForm() {
  const { createCoupon, isLoading } = useCreateCoupon();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    if (!data) {
      reset();
    }

    let { amount, price } = data;
    amount = Number(amount);
    price = Number(price);
    const startDate = getSqlDateOfToday();
    const coupon = { ...data, startDate, price, amount };

    createCoupon(coupon);

    navigate("/company/info");
  };

  //TODO: I need to check for errors like negative numbers and display and end date larger than today

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form and create your coupon
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col m-5 space-y-6"
      >
        <input
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500">This field is required</span>
        )}

        <select
          className="w-2/3 p-2.5 bg-white border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
          {...register("category", { required: true })}
        >
          <option value="FOOD">food</option>
          <option value="HEALTH">health</option>
          <option value="SPORT">sport</option>
          <option value="ELECTRONICS">electronics</option>
          <option value="VACATION">vacation</option>
          <option value="FURNITURE">furniture</option>
          <option value="CARS">cars</option>
          <option value="CLOTHING">clothing</option>
          <option value="GROCERIES">groceries</option>
        </select>

        <textarea
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="endDate"
          type="date"
          {...register("endDate", { required: true })}
        />
        {errors.endDate && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="amount"
          type="number"
          {...register("amount", { required: true })}
        />
        {errors.amount && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="price"
          type="number"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <span className="text-red-500">This field is required</span>
        )}

        <input
          className="w-2/3 px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="image URL"
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="text-red-500">This field is required</span>
        )}

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

export default CreateCouponForm;
