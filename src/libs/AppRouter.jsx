import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullPageLoader from "../ui/FullPageLoader";
import Home from "../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("../pages/Login"));
const Page404 = lazy(() => import("../pages/Page404"));
const AppLayout = lazy(() => import("../pages/../ui/AppLayout"));

const Companies = lazy(() => import("../features/admin/companies/Companies"));
const CreateCompanyForm = lazy(() =>
  import("../features/admin/companies/CreateCompanyForm")
);
const Customers = lazy(() => import("../features/admin/customers/Customers"));
const CreateCustomerForm = lazy(() =>
  import("../features/admin/customers/CreateCustomerForm")
);
const Dashboard = lazy(() => import("../features/admin/Dashboard"));

const CompanyInfo = lazy(() => import("../features/company/CompanyInfo"));
const CreateCouponForm = lazy(() =>
  import("../features/company/CreateCouponForm")
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

          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="companies" element={<Companies />} />
            <Route path="companies/create" element={<CreateCompanyForm />} />
            <Route path="customers" element={<Customers />} />
            <Route path="customers/create" element={<CreateCustomerForm />} />
          </Route>

          <Route
            path="company"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="info" />} />
            <Route path="info" element={<CompanyInfo />} />
            <Route path="create" element={<CreateCouponForm />} />
          </Route>

          <Route
            path="customer"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
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
