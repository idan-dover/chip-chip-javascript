import { useQueryClient } from "@tanstack/react-query";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
  //1. clear auth in query client
  //1. clear auth in localstorage
  //2.navigate to home
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleClick = function () {
    queryClient.clear();
    localStorage.removeItem("auth");
    navigate("/home");
  };

  return (
    <Button onClick={handleClick} variation="secondary">
      <span>logout</span>
    </Button>
  );
}

export default LogoutButton;
