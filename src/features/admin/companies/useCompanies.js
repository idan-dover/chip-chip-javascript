import { useQuery } from "@tanstack/react-query";
import { getAllCompanies } from "../../../services/apiAdmin";

export function useCompanies() {
  const {
    isLoading: isLoadingCompanies,
    data: companies,
    error,
  } = useQuery({
    queryKey: ["companies"],
    queryFn: getAllCompanies,
  });

  return { isLoadingCompanies, error, companies };
}
