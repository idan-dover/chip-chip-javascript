import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { deleteCustomer } from "../../../services/apiAdmin";

function useDeleteCustomer() {
  const queryClient = useQueryClient();

  const { mutate: remove, isLoading } = useMutation({
    mutationFn: deleteCustomer,
    onSuccess: () => {
      toast.success("Customer has been deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["customers"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, remove };
}

export default useDeleteCustomer;
