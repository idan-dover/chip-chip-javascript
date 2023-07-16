import { useQuery, useQueryClient } from "@tanstack/react-query";
import Coupon from "./Coupon";
import { toast } from "react-hot-toast";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { FaCartShopping } from "react-icons/fa6";

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
    //TODO: need to fix purchasing

    case "purchase":
      return (
        <div className="grid grid-cols-2 gap-2 px-3 py-4 md:gap-4 md:grid-cols-4">
          <Modal>
            {coupons &&
              coupons.map((coupon) => (
                <Coupon key={coupon.id} coupon={coupon}>
                  <Coupon.Base />
                  <Coupon.Dates />
                  <Coupon.Price />
                  <Modal.Open opens="purchase">
                    <div className="px-3 py-2 ml-auto">
                      <Button
                        variation="round"
                        onClick={() => {
                          return;
                        }}
                      >
                        <FaCartShopping />
                      </Button>
                    </div>
                  </Modal.Open>
                  <Modal.Window name="purchase">
                    <Coupon.Purchase />
                  </Modal.Window>
                </Coupon>
              ))}
          </Modal>
        </div>
      );

    default:
      toast.error("Can't seem to load your coupons");
  }
}

export default CouponList;
