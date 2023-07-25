import Button from "../../components/Button";
import LogoutButton from "../../components/LogoutButton";

function CustomerHeader() {
  return (
    <>
      <Button to="/customer/info" variation="primary">
        <span>info</span>
      </Button>
      <Button to="/customer/buy" variation="primary">
        <span>buy</span>
      </Button>
      <LogoutButton />
    </>
  );
}

export default CustomerHeader;
