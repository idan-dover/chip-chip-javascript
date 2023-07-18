import { useQueryClient } from "@tanstack/react-query";
import { useCompanyInfo } from "./useCompanyInfo";
import Loader from "../../ui/Loader";
import CouponFilter from "../coupons/CouponFilter";
import CouponList from "../coupons/CouponList";

function CompanyInfo() {
  const { isLoading, info } = useCompanyInfo();
  const queryClient = useQueryClient();

  if (isLoading) {
    return <Loader variation="area" />;
  }
  const { name, coupons } = info;

  queryClient.setQueryData(["coupons"], coupons);
  return (
    <div className="px-4 py-4 dark:text-gray-50">
      <h1 className="px-3 pt-1 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">{`Hello ${name}, you have ${coupons.length} coupons`}</h1>
      <CouponFilter coupons={coupons} type="info" />
      <CouponList type="edit" />
    </div>
  );
}

export default CompanyInfo;
