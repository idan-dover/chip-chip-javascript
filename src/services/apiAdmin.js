import axiosInstance from "../libs/Axios";

export async function getAllCompanies() {
  return axiosInstance.get(`/admin/companies`);
}

export async function addCompany(company) {
  return axiosInstance.post(`/admin/companies`, company);
}

export async function updateCompany(data) {
  const { companyId, company } = data;
  return axiosInstance.put(`/admin/companies/${companyId}`, company);
}

export async function deleteCompany(companyId) {
  return axiosInstance.delete(`/admin/companies/${companyId}`);
}

export async function getAllCustomers() {
  return axiosInstance.get(`/admin/customers`);
}

export async function addCustomer(customer) {
  return axiosInstance.post(`/admin/customers`, customer);
}

export async function updateCustomer(data) {
  const { customerId, customer } = data;
  return axiosInstance.put(`/admin/customers/${customerId}`, customer);
}

export async function deleteCustomer(customerId) {
  return axiosInstance.delete(`/admin/customers/${customerId}`);
}
