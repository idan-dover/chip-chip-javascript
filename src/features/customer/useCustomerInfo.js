import { useQuery } from "@tanstack/react-query";
import { getCustomerDetails } from "../../services/apiCustomer";

export function useCustomerInfo() {
  const {
    isLoading,
    data: info,
    error,
  } = useQuery({
    queryKey: ["info"],
    queryFn: getCustomerDetails,
  });

  return { isLoading, error, info };
}
