import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useLogin() {
  const navigate = useNavigate();

  const { mutate: loginToApp, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (user) => {
      toast.success("Chip chip, Happy to see you");
      switch (user.clientType) {
        case "CUSTOMER":
          navigate("/customer");
          break;
        case "COMPANY":
          navigate("/company");
          break;
        case "ADMIN":
          navigate("/admin");
          break;
      }
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, loginToApp };
}

export default useLogin;
