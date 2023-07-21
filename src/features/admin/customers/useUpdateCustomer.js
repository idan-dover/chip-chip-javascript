import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateCustomer } from "../../../services/apiAdmin";

function useUpdateCustomer() {
  const queryClient = useQueryClient();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: updateCustomer,
    onSuccess: () => {
      toast.success("Chip chip, you have updated this customer");
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, update };
}

export default useUpdateCustomer;
