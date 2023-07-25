import { useForm } from "react-hook-form";
import Button from "../../components/Button";
import useUpdateCoupon from "../company/useUpdateCoupon";

function UpdateCouponForm({ coupon }) {
  const { update, isLoading } = useUpdateCoupon();

  const {
    id,
    category,
    title,
    description,
    startDate,
    endDate,
    image,
    price,
    amount,
  } = coupon;

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
    const coupon = { ...data, id, startDate, price, amount };
    const toUpdate = { couponId: id, coupon };
    update(toUpdate);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-5 mx-1 my-3 space-y-6"
    >
      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          title:{" "}
        </span>
        <input
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="title"
          defaultValue={title}
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          category:{" "}
        </span>
        <select
          className="w-full p-2.5 bg-white border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
          defaultValue={category}
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
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          description:{" "}
        </span>
        <textarea
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          defaultValue={description}
          placeholder="description"
          {...register("description", { required: true })}
        />
        {errors.description && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          end date:{" "}
        </span>
        <input
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          defaultValue={endDate}
          placeholder="endDate"
          type="date"
          {...register("endDate", { required: true })}
        />
        {errors.endDate && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          amount:{" "}
        </span>
        <input
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="amount"
          defaultValue={amount}
          type="number"
          {...register("amount", { required: true })}
        />
        {errors.amount && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          price:{" "}
        </span>
        <input
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="price"
          defaultValue={price}
          type="number"
          {...register("price", { required: true })}
        />
        {errors.price && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-mono text-lime-500 dark:text-lime-100 ">
          image URL:{" "}
        </span>
        <input
          className="px-4 py-2 text-sm transition-all duration-300 border rounded-md border-stone-200 placeholder:text-stone-400 focus:outline-none focus:ring-0 md:px-6 md:py-3"
          placeholder="image URL"
          defaultValue={image}
          {...register("image", { required: true })}
        />
        {errors.image && (
          <span className="text-red-500">This field is required</span>
        )}
      </div>

      <Button
        variation="primary"
        onClick={() => {
          return;
        }}
        disabled={isLoading}
      >
        update
      </Button>
    </form>
  );
}

export default UpdateCouponForm;
