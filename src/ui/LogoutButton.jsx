import { useQueryClient } from "@tanstack/react-query";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleClick = function () {
    queryClient.clear();
    sessionStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <Button onClick={handleClick} variation="secondary">
      <span>logout</span>
    </Button>
  );
}

export default LogoutButton;
