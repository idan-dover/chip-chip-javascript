import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCoupon } from "../../services/apiCompany";
import { toast } from "react-hot-toast";

function useDeleteCoupon() {
  const queryClient = useQueryClient();

  const { mutate: remove, isLoading } = useMutation({
    mutationFn: deleteCoupon,
    onSuccess: () => {
      toast.success("Coupon has been deleted successfully");
      queryClient.invalidateQueries({
        queryKey: ["info"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, remove };
}

export default useDeleteCoupon;
