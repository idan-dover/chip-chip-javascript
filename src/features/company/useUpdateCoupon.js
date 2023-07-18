import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCoupon } from "../../services/apiCompany";
import { toast } from "react-hot-toast";

function useUpdateCoupon() {
  const queryClient = useQueryClient();

  const { mutate: update, isLoading } = useMutation({
    mutationFn: updateCoupon,
    onSuccess: () => {
      toast.success("Chip chip, you have updated this coupon");
      queryClient.invalidateQueries({
        queryKey: ["info"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, update };
}

export default useUpdateCoupon;
