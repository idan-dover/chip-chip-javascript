import useTheme from "../hooks/useTheme";
import Button from "./Button";
import Logo from "./Logo";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa6";
import CustomerHeader from "../features/customer/CustomerHeader";
import CompanyHeader from "../features/company/CompanyHeader";
import AdminHeader from "../features/admin/AdminHeader";

function Header() {
  const [theme, onClick] = useTheme();

  const userType = JSON.parse(sessionStorage.getItem("auth"))?.clientType;

  return (
    <header className="flex items-center justify-between px-4 py-3 font-semibold bg-lime-500 dark:bg-lime-600">
      <Logo />
      <div className="flex items-center justify-between px-3 space-x-4 ">
        <Button onClick={onClick} variation="round">
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>
        {!userType && (
          <Button to="/login" variation="primary">
            <span>Login</span>
          </Button>
        )}
        {userType === "CUSTOMER" && <CustomerHeader />}
        {userType === "COMPANY" && <CompanyHeader />}
        {userType === "ADMIN" && <AdminHeader />}
      </div>
    </header>
  );
}

export default Header;
