import { useMutation } from "@tanstack/react-query";
import { register } from "../../services/apiAuth";
import { toast } from "react-hot-toast";
import useLogin from "./useLogin";
function useRegister() {
  const { loginToApp } = useLogin();
  const { mutate: registerToApp, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (user) => {
      loginToApp(user);
    },
    onError: (err) => toast.error(err.message),
  });

  return { isLoading, registerToApp };
}

export default useRegister;
