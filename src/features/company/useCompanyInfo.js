import { useQuery } from "@tanstack/react-query";
import { getCompanyDetails } from "../../services/apiCompany";

export function useCompanyInfo() {
  const {
    isLoading,
    data: info,
    error,
  } = useQuery({
    queryKey: ["info"],
    queryFn: getCompanyDetails,
  });

  return { isLoading, error, info };
}
