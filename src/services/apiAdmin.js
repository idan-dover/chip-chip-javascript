import { ADMIN_URL } from "./URLs";
//TODO: finish replacing apiAdmin to axios

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

export async function addCompany(company) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/companies`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCompany(data) {
  const { companyId, company } = data;
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/companies/${companyId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(company),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
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

export async function addCustomer(customer) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/customers`, {
      method: "POST",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function updateCustomer(data) {
  const { customerId, customer } = data;
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/customers/${customerId}`, {
      method: "PUT",
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.description);
    }
  } catch (err) {
    throw new Error(err);
  }
}

export async function deleteCustomer(id) {
  try {
    const token = JSON.parse(localStorage.getItem("auth")).token;
    const res = await fetch(`${ADMIN_URL}/customers/${id}`, {
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
