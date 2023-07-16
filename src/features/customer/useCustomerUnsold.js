import { useQuery } from "@tanstack/react-query";
import { getCustomerUnsoldCoupons } from "../../services/apiCustomer";

export function useCustomerUnsold() {
  const {
    isLoading,
    data: unSoldCoupons,
    error,
  } = useQuery({
    queryKey: ["unsold"],
    queryFn: getCustomerUnsoldCoupons,
  });

  return { isLoading, error, unSoldCoupons };
}
