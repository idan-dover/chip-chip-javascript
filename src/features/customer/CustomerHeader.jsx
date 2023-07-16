import Button from "../../ui/Button";

function CustomerHeader() {
  return (
    <>
      <Button to="/customer/info" variation="primary">
        <span>info</span>
      </Button>
      <Button to="/customer/buy" variation="primary">
        <span>buy</span>
      </Button>
    </>
  );
}

export default CustomerHeader;
