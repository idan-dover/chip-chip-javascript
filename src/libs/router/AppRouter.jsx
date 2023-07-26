import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import FullPageLoader from "../../components/FullPageLoader";
import Home from "../../pages/Home";
import ProtectedRoute from "./ProtectedRoute";

const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const RegisterCustomerForm = lazy(() =>
  import("../../features/auth/RegisterCustomerForm")
);
const RegisterCompanyForm = lazy(() =>
  import("../../features/auth/RegisterCompanyForm")
);
const Page404 = lazy(() => import("../../pages/Page404"));
const About = lazy(() => import("../../pages/About"));
const AppLayout = lazy(() => import("../../components/AppLayout"));

const Companies = lazy(() =>
  import("../../features/admin/companies/Companies")
);
const CreateCompanyForm = lazy(() =>
  import("../../features/admin/companies/CreateCompanyForm")
);
const Customers = lazy(() =>
  import("../../features/admin/customers/Customers")
);
const CreateCustomerForm = lazy(() =>
  import("../../features/admin/customers/CreateCustomerForm")
);
const Dashboard = lazy(() => import("../../features/admin/Dashboard"));

const CompanyInfo = lazy(() => import("../../features/company/CompanyInfo"));
const CreateCouponForm = lazy(() =>
  import("../../features/company/CreateCouponForm")
);

const CustomerInfo = lazy(() => import("../../features/customer/CustomerInfo"));
const CustomerUnsoldCoupons = lazy(() =>
  import("../../features/customer/CustomerUnsoldCoupons")
);

function AppRouter() {
  return (
    <Suspense fallback={<FullPageLoader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />}>
            <Route path="customer" element={<RegisterCustomerForm />} />
            <Route path="company" element={<RegisterCompanyForm />} />
          </Route>
          <Route path="about" element={<About />} />

          <Route
            path="admin"
            element={
              <ProtectedRoute protect="admin">
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
              <ProtectedRoute protect="company">
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
              <ProtectedRoute protect="customer">
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
