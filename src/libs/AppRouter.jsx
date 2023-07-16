import Home from "../pages/Home";
import Page404 from "../pages/Page404";
import Login from "../pages/Login";
import AdminLayout from "../ui/AdminLayout";
import Companies from "../ui/Companies";
import Customers from "../ui/Customers";
import Dashboard from "../ui/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CustomerLayout from "../features/customer/CustomerLayout";
import CustomerInfo from "../features/customer/CustomerInfo";
import CouponList from "../features/coupons/CouponList";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="companies" element={<Companies />} />
          <Route path="customers" element={<Customers />} />
        </Route>
        <Route path="customer" element={<CustomerLayout />}>
          <Route index element={<Navigate replace to="info" />} />
          <Route path="info" element={<CustomerInfo />} />
          <Route path="buy" element={<CouponList />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
