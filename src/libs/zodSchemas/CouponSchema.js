import { z } from "zod";

const couponSchema = z.object({
  title: z
    .string()
    .nonempty("this field is required")
    .max(40, "title should not exceed 40 characters"),
  category: z.enum([
    "FOOD",
    "HEALTH",
    "SPORT",
    "ELECTRONICS",
    "VACATION",
    "FURNITURE",
    "CARS",
    "CLOTHING",
    "GROCERIES",
  ]),
  description: z.string().nonempty("this field is required"),
  endDate: z
    .string()
    .nonempty("this field is required")
    .transform((date) => new Date(date))
    .refine(
      (date) => {
        if (date === "") return;
        return date?.getTime() > new Date().getTime();
      },
      {
        message: "Date must be in the future",
      }
    ),
  amount: z
    .string()
    .nonempty("this field is required")
    .transform((amount) => parseInt(amount))
    .refine((value) => Number.isInteger(value) && value > 0, {
      message: "Number must be positive and not decimal",
    }),
  price: z
    .string()
    .nonempty("this field is required")
    .transform((price) => parseFloat(price))
    .refine((value) => value > 0, {
      message: "price must be positive",
    }),
  image: z.string().nonempty("this field is required"),
});

export default couponSchema;
