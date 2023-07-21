import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCompany } from "../../../services/apiAdmin";

function useUpdateCompany() {
  const queryClient = useQueryClient();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: updateCompany,
    onSuccess: () => {
      toast.success("Chip chip, you have updated this company");
      queryClient.invalidateQueries({
        queryKey: ["companies"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, update };
}

export default useUpdateCompany;
