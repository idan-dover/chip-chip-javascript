import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { addCoupon } from "../../services/apiCompany";

function useCreateCoupon() {
  const queryClient = useQueryClient();

  const { mutate: createCoupon, isLoading } = useMutation({
    mutationFn: addCoupon,
    onSuccess: () => {
      toast.success("Chip chip, you created new coupon");
      queryClient.invalidateQueries({
        queryKey: ["info"],
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, createCoupon };
}

export default useCreateCoupon;
