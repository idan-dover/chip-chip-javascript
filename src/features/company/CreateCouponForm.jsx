import useCreateCoupon from "./useCreateCoupon";
import { getSqlDateOfToday } from "../../utils/dates";
import { useNavigate } from "react-router-dom";
import Form from "../../components/Form";
import couponSchema from "../../libs/zodSchemas/CouponSchema";

function CreateCouponForm() {
  const { createCoupon } = useCreateCoupon();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    let { amount, price } = data;
    amount = Number(amount);
    price = Number(price);
    const startDate = getSqlDateOfToday();
    const coupon = { ...data, startDate, price, amount };

    createCoupon(coupon);
    navigate("/company/info");
  };

  return (
    <>
      <h1 className="px-3 py-3 font-serif text-3xl text-amber-500 text-md dark:text-amber-300">
        Fill the form and create your coupon
      </h1>
      <Form schema={couponSchema} onSubmit={onSubmit}>
        <Form.Input name="title" />
        <Form.Select
          name="category"
          options={[
            { value: "FOOD", text: "food" },
            { value: "HEALTH", text: "health" },
            { value: "SPORT", text: "sport" },
            { value: "ELECTRONICS", text: "electronics" },
            { value: "VACATION", text: "vacation" },
            { value: "FURNITURE", text: "furniture" },
            { value: "CARS", text: "cars" },
            { value: "CLOTHING", text: "clothing" },
            { value: "GROCERIES", text: "groceries" },
          ]}
        />
        <Form.TextArea name="description" />
        <Form.Input name="endDate" type="date" />
        <Form.Input name="amount" type="number" />
        <Form.Input name="price" type="number" />
        <Form.Input name="image" />
        <Form.Buttons>
          <Form.CancelButton />
          <Form.SubmitButton />
        </Form.Buttons>
      </Form>
    </>
  );
}

export default CreateCouponForm;
