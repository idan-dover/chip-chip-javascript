import { useQuery } from "@tanstack/react-query";
import { getAllCustomers } from "../../../services/apiAdmin";

export function useCustomers() {
  const {
    isLoading: isLoadingCustomers,
    data: customers,
    error,
  } = useQuery({
    queryKey: ["customers"],
    queryFn: getAllCustomers,
  });

  return { isLoadingCustomers, error, customers };
}

export default useCustomers;
