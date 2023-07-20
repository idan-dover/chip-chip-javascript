import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCompany } from "../../../services/apiAdmin";

function useDeleteCompany() {
  const queryClient = useQueryClient();

  const { mutate: remove, isLoading } = useMutation({
    mutationFn: deleteCompany,
    onSuccess: () => {
      toast.success("Company has been deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, remove };
}

export default useDeleteCompany;
