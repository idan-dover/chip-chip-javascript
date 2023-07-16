import { useQuery, useQueryClient } from "@tanstack/react-query";
import Coupon from "./Coupon";

function CouponList() {
  const queryClient = useQueryClient();

  const { data: coupons } = useQuery(["coupons"], () =>
    queryClient.getQueryData(["coupons"])
  );

  console.log(coupons);

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
}

export default CouponList;
