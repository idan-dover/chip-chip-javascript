import { COMPANY_URL } from "./URLs";

export async function getCompanyDetails() {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(COMPANY_URL, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }

    const data = await res.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function addCoupon(coupon) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${COMPANY_URL}/coupon`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coupon),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCoupon(data) {
  const { couponId, coupon } = data;
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${COMPANY_URL}/coupon/${couponId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(coupon),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteCoupon(couponId) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${COMPANY_URL}/coupon/${couponId}`, {
      method: "DELETE",
      headers: {
        Authorization: token,
      },
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}
