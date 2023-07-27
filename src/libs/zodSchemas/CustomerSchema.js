import { z } from "zod";

const customerSchema = z.object({
  firstName: z.string().nonempty("this field is required"),
  lastName: z.string().nonempty("this field is required"),
  email: z
    .string()
    .nonempty("this field is required")
    .email("Invalid email format")
    .min(5, "Email should be at least 5 characters long")
    .max(100, "Email should not exceed 100 characters"),
  password: z
    .string()
    .nonempty("this field is required")
    .min(8, "Password should be at least 8 characters long")
    .max(50, "Password should not exceed 50 characters"),
});

export default customerSchema;
