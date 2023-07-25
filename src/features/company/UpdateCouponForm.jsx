import Form from "../../components/Form";
import couponSchema from "../../libs/zodSchemas/CouponSchema";
import useUpdateCoupon from "../company/useUpdateCoupon";

function UpdateCouponForm({ coupon }) {
  const { update } = useUpdateCoupon();

  const {
    id,
    category,
    title,
    description,
    startDate,
    endDate,
    image,
    price,
    amount,
  } = coupon;

  const onSubmit = async (data) => {
    let { amount, price } = data;
    amount = Number(amount);
    price = Number(price);
    const coupon = { ...data, id, startDate, price, amount };
    const toUpdate = { couponId: id, coupon };
    update(toUpdate);
  };

  return (
    <Form schema={couponSchema} onSubmit={onSubmit}>
      <Form.Input name="title" defaultValue={title} />
      <Form.Select
        name="category"
        defaultValue={category}
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
      <Form.TextArea name="description" defaultValue={description} />
      <Form.Input name="endDate" type="date" defaultValue={endDate} />
      <Form.Input name="amount" type="number" defaultValue={amount} />
      <Form.Input name="price" type="number" defaultValue={price} />
      <Form.Input name="image" defaultValue={image} />
      <Form.Buttons>
        <Form.SubmitButton btnText="update" />
      </Form.Buttons>
    </Form>
  );
}

export default UpdateCouponForm;
