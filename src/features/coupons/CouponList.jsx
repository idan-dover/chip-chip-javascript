import { useQuery, useQueryClient } from "@tanstack/react-query";
import Coupon from "./Coupon";
import { toast } from "react-hot-toast";

function CouponList({ type }) {
  const queryClient = useQueryClient();

  const { data: coupons } = useQuery(["coupons"], () =>
    queryClient.getQueryData(["coupons"])
  );

  switch (type) {
    case "info":
      return (
        <div className="grid grid-cols-2 gap-2 px-3 py-4 md:gap-4 md:grid-cols-4">
          {coupons &&
            coupons.map((coupon) => (
              <Coupon key={coupon.id} coupon={coupon}>
                <Coupon.Base />
                <Coupon.Dates />
              </Coupon>
            ))}
        </div>
      );

    case "purchase":
      return (
        <div className="grid grid-cols-2 gap-2 px-3 py-4 md:gap-4 md:grid-cols-4">
          {coupons &&
            coupons.map((coupon) => (
              <Coupon key={coupon.id} coupon={coupon}>
                <Coupon.Base />
                <Coupon.Dates />
                <Coupon.Price />
                <Coupon.Purchase />
              </Coupon>
            ))}
        </div>
      );

    case "edit":
      return (
        <div className="grid grid-cols-2 gap-2 px-3 py-4 md:gap-4 md:grid-cols-4">
          {coupons &&
            coupons.map((coupon) => (
              <Coupon key={coupon.id} coupon={coupon}>
                <Coupon.Base />
                <Coupon.Dates />
                <Coupon.Price />
                <Coupon.Edit />
              </Coupon>
            ))}
        </div>
      );

    default:
      toast.error("Can't seem to load your coupons");
  }
}

export default CouponList;
