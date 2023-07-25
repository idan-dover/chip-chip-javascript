import axiosInstance from "../libs/Axios";

export async function getCompanyDetails() {
  return axiosInstance.get(`/company`);
}

export async function addCoupon(coupon) {
  return axiosInstance.post(`/company/coupon`, coupon);
}

export async function updateCoupon(data) {
  const { couponId, coupon } = data;
  return axiosInstance.put(`/company/coupon/${couponId}`, coupon);
}

export async function deleteCoupon(couponId) {
  return axiosInstance.delete(`/company/coupon/${couponId}`);
}
