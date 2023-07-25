import axios from "axios";
import { ADMIN_URL } from "./URLs";

// export async function getAllCompanies() {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/companies`, {
//       method: "GET",
//       headers: {
//         Authorization: token,
//       },
//     });
//     const data = await res.json();

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }

//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function getAllCompanies() {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .get(`${ADMIN_URL}/companies`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function addCompany(company) {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/companies`, {
//       method: "POST",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(company),
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function addCompany(company) {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .post(`${ADMIN_URL}/companies`, company, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function updateCompany(data) {
//   const { companyId, company } = data;
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/companies/${companyId}`, {
//       method: "PUT",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(company),
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function updateCompany(data) {
  const { companyId, company } = data;
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .put(`${ADMIN_URL}/companies/${companyId}`, company, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function deleteCompany(id) {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/companies/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: token,
//       },
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function deleteCompany(companyId) {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .delete(`${ADMIN_URL}/companies/${companyId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function getAllCustomers() {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/customers`, {
//       method: "GET",
//       headers: {
//         Authorization: token,
//       },
//     });
//     const data = await res.json();

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }

//     return data;
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function getAllCustomers() {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .get(`${ADMIN_URL}/customers`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function addCustomer(customer) {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/customers`, {
//       method: "POST",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(customer),
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function addCustomer(customer) {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .post(`${ADMIN_URL}/customers`, customer, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function updateCustomer(data) {
//   const { customerId, customer } = data;
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/customers/${customerId}`, {
//       method: "PUT",
//       headers: {
//         Authorization: token,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(customer),
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function updateCustomer(data) {
  const { customerId, customer } = data;
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .put(`${ADMIN_URL}/customers/${customerId}`, customer, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}

// export async function deleteCustomer(id) {
//   try {
//     const token = JSON.parse(localStorage.getItem("auth")).token;
//     const res = await fetch(`${ADMIN_URL}/customers/${id}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: token,
//       },
//     });

//     if (!res.ok) {
//       const err = await res.json();
//       throw new Error(err.description);
//     }
//   } catch (err) {
//     throw new Error(err);
//   }
// }

export async function deleteCustomer(customerId) {
  const token = JSON.parse(localStorage.getItem("auth")).token;
  return axios
    .delete(`${ADMIN_URL}/customers/${customerId}`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.data)
    .catch((error) => new Error(error.response.data.description));
}
