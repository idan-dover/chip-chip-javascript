import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { purchaseCoupon } from "../../services/apiCustomer";

function usePurchase() {
  const queryClient = useQueryClient();

  const { mutate: purchase, isLoading } = useMutation({
    mutationFn: purchaseCoupon,
    onSuccess: () => {
      toast.success("Chip chip, you have a new coupon");
      queryClient.invalidateQueries({
        queryKey: ["unsold"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, purchase };
}

export default usePurchase;
