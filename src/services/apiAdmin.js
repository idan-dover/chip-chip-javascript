import { ADMIN_URL } from "./URLs";

export async function getAllCompanies() {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/companies`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }

    return data;
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteCompany(id) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/companies/${id}`, {
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

export async function getAllCustomers() {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/customers`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    });
    const data = await res.json();

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }

    return data;
  } catch (err) {
    throw new Error(err);
  }
}
