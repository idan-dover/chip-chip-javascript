import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, protect }) {
  const clientType = JSON.parse(
    sessionStorage.getItem("auth")
  )?.clientType.toLowerCase();
  if (clientType !== protect) {
    return <Navigate replace to="/login" />;
  }

  return children;
}

export default ProtectedRoute;
