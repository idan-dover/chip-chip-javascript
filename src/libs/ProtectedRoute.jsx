import { useQueryClient } from "@tanstack/react-query";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const queryClient = useQueryClient();
  if (queryClient.getQueryData(["auth"])) {
    return children;
  }

  return <Navigate replace to="/home" />;
}

export default ProtectedRoute;
