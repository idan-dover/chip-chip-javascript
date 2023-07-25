import { useQueryClient } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { useCustomerUnsold } from "./useCustomerUnsold";
import CouponFilter from "../coupons/CouponFilter";
import CouponList from "../coupons/CouponList";
import EmptyView from "../../components/EmptyView";

function CustomerUnsoldCoupons() {
  const { isLoading, unSoldCoupons } = useCustomerUnsold();
  const queryClient = useQueryClient();

  if (isLoading) {
    return <Loader />;
  }

  queryClient.setQueryData(["coupons"], unSoldCoupons);

  if (unSoldCoupons.length === 0) {
    return <EmptyView linkTo="/customer/info" linkText="back to your info" />;
  }

  return (
    <div className="px-4 py-4 dark:text-gray-50">
      <CouponFilter coupons={unSoldCoupons} type="purchase" />
      <CouponList type="purchase" />
    </div>
  );
}

export default CustomerUnsoldCoupons;
