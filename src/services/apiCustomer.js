import axiosInstance from "../libs/Axios";

export async function getCustomerDetails() {
  return axiosInstance.get(`/customer`);
}

export async function getCustomerUnsoldCoupons() {
  return axiosInstance.get(`/customer/coupon/purchase`);
}

export async function purchaseCoupon(couponId) {
  return axiosInstance.put(`/customer/coupon/purchase/${couponId}`);
}

export async function filterCouponsByCategory(category) {
  return axiosInstance.get(`/customer/category?val=${category}`);
}

export async function filterCouponsByMaxPrice(price) {
  return axiosInstance.get(`/customer/price?val=${price}`);
}
