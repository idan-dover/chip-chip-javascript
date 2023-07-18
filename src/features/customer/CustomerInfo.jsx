import CouponList from "../coupons/CouponList";
import Loader from "../../ui/Loader";
import { useCustomerInfo } from "./useCustomerInfo";
import CouponFilter from "../coupons/CouponFilter";
import { useQueryClient } from "@tanstack/react-query";
function CustomerInfo() {
  const { isLoading, info } = useCustomerInfo();
  const queryClient = useQueryClient();

  if (isLoading) {
    return <Loader variation="area" />;
  }
  const { firstName, lastName, coupons } = info;

  queryClient.setQueryData(["coupons"], coupons);
  return (
    <div className="px-4 py-4 dark:text-gray-50">
      <h1 className="px-3 pt-1 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">{`Hello ${firstName} ${lastName}, you have ${coupons.length} coupons`}</h1>
      <CouponFilter coupons={coupons} type="info" />
      <CouponList type="info" />
    </div>
  );
}

export default CustomerInfo;
