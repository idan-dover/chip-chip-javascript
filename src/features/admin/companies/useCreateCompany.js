import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCompany } from "../../../services/apiAdmin";

function useCreateCompany() {
  const queryClient = useQueryClient();

  const { mutate: createCompany, isLoading } = useMutation({
    mutationFn: addCompany,
    onSuccess: () => {
      toast.success("Chip chip, you created new company");
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, createCompany };
}

export default useCreateCompany;
