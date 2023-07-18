import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullPageLoader from "../ui/FullPageLoader";
import Home from "../pages/Home";

const Login = lazy(() => import("../pages/Login"));
const Page404 = lazy(() => import("../pages/Page404"));

const AdminLayout = lazy(() => import("../features/admin/AdminLayout"));
const Companies = lazy(() => import("../features/admin/Companies"));
const Customers = lazy(() => import("../features/admin/Customers"));
const Dashboard = lazy(() => import("../features/admin/Dashboard"));

const CustomerLayout = lazy(() =>
  import("../features/customer/CustomerLayout")
);
const CustomerInfo = lazy(() => import("../features/customer/CustomerInfo"));
const CustomerUnsoldCoupons = lazy(() =>
  import("../features/customer/CustomerUnsoldCoupons")
);

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
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
            <Route path="buy" element={<CustomerUnsoldCoupons />} />
          </Route>
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default AppRouter;
