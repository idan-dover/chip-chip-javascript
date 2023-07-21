import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCustomer } from "../../../services/apiAdmin";

function useCreateCustomer() {
  const queryClient = useQueryClient();

  const { mutate: createCustomer, isLoading } = useMutation({
    mutationFn: addCustomer,
    onSuccess: () => {
      toast.success("Chip chip, you created new customer");
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, createCustomer };
}

export default useCreateCustomer;
