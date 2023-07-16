import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function CouponFilter({ coupons }) {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();
  const [filterMethod, setFilterMethod] = useState("category");

  const resetCoupons = function () {
    const { coupons } = queryClient.getQueryData(["info"]);

    queryClient.setQueryData(["coupons"], coupons);
  };

  const filterByCategory = function (category) {
    const filteredCoupons = coupons.filter(
      (coupon) => coupon.category === category
    );
    queryClient.setQueryData(["coupons"], filteredCoupons);
  };

  const filterByPrice = function (category) {
    const filteredCoupons = coupons.filter(
      (coupon) => coupon.price <= category
    );
    queryClient.setQueryData(["coupons"], filteredCoupons);
  };

  const onSubmit = (data) => {
    if (!data) {
      return;
    }
    resetCoupons();

    if (filterMethod === "category") {
      filterByCategory(data.category);
    } else {
      filterByPrice(data.maxPrice);
    }
  };
  return (
    <form
      className="flex items-center justify-around py-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex items-center justify-center space-x-6">
        <p className="px-3 py-2 font-mono text-gray-800 text-md dark:text-gray-50">
          Filter by:
        </p>
        <select
          name="filterMethod"
          value={filterMethod}
          onChange={(e) => setFilterMethod(e.target.value)}
          className="w-full p-2.5 bg-gray-100 text-gray-800  border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
        >
          <option value="category">category</option>
          <option value="price">price</option>
        </select>
        {filterMethod === "category" ? (
          <select
            name="category"
            className="w-full p-2.5 bg-gray-100 text-gray-800  border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none "
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
        ) : (
          <input
            className="w-full p-2.5 bg-gray-100 text-gray-800  border rounded-md shadow-sm outline-none focus:ring-0 focus:outline-none"
            type="number"
            {...register("maxPrice", { required: true })}
          />
        )}
      </div>
      <div className="flex items-center justify-between space-x-5 ">
        <Button
          variation="primary"
          onClick={() => {
            return;
          }}
        >
          search
        </Button>
        <Button
          variation="secondary"
          onClick={(e) => {
            e.preventDefault();
            resetCoupons();
          }}
        >
          see all
        </Button>
      </div>
    </form>
  );
}

export default CouponFilter;
